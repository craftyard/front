import {
  ArrayFieldErrors, FieldErrors, RuleErrors,
} from 'rilata/src/domain/validator/field-validator/types';
import { ValidationRule } from 'rilata/src/domain/validator/rules/validation-rule';
import { DTO } from 'rilata/src/domain/dto';
import { Validators } from '@angular/forms';
import { ValidatorFormModalComponent } from './ui-kit/validator-modal/component';

class ValidatorUtils {
  ERROR_ATTR_PREFIX = 'Errors';

  bindValidators(
    formComponent: ValidatorFormModalComponent<DTO>,
  ): void {
    const { formGroup } = formComponent;

    Object.keys(formGroup.controls).forEach((attrName) => {
      const { isRequired } = formComponent.validatorMap[attrName];
      if (isRequired) {
        formGroup.get(attrName)?.addValidators(Validators.required);
      }
      formGroup.get(attrName)?.valueChanges.subscribe((value: string) => {
        this.validateAttrs(attrName, value, formComponent);
      });
    });
  }

  private validateAttrs(
    attrName: string,
    value: unknown,
    formComponent: ValidatorFormModalComponent<DTO>,
  ): void {
    const targetErrorAttrName = `${attrName}${this.ERROR_ATTR_PREFIX}`;
    const targetErrorAttr = (formComponent as Record<string, any>)[targetErrorAttrName];

    if (targetErrorAttr === undefined) {
      throw Error(`not finded attribute by name: ${targetErrorAttrName}`);
    }

    const result = formComponent.validatorMap[attrName].validate(value);
    if (result.isSuccess()) {
      targetErrorAttr.next(undefined);
    } else {
      const fieldErrors = this.fieldErrorsTypeGuard(result.value)[attrName];
      const ruleErrors = this.ruleErrorsTypeGuard(fieldErrors);
      const errTexts: string[] = ruleErrors.map(
        (ruleError) => ValidationRule.rawToMessage(ruleError),
      );
      targetErrorAttr.next(errTexts);
      formComponent.formGroup.get(attrName)?.markAsTouched();
      formComponent.formGroup.get(attrName)?.setErrors({ incorrect: true });
    }
  }

  private ruleErrorsTypeGuard(errors: FieldErrors | RuleErrors): RuleErrors {
    if (!Array.isArray(errors)) {
      throw Error('передан не массив ruleErrors');
    }
    return errors;
  }

  private fieldErrorsTypeGuard(errors: FieldErrors | ArrayFieldErrors): FieldErrors {
    Object.keys(errors).forEach((key) => {
      if (!Number.isNaN(Number(key))) {
        throw Error(`ошибка валидации получена из данных массива данных. Значение ключа: ${key}`);
      }
    });
    return errors;
  }
}

export const validatorUtils = new ValidatorUtils();
