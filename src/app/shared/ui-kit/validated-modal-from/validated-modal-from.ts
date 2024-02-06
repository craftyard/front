import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DTO } from 'rilata/src/domain/dto';
import {
  ArrayFieldErrors, FieldErrors, RuleErrors, ValidatorMap,
} from 'rilata/src/domain/validator/field-validator/types';
import { ValidationRule } from 'rilata/src/domain/validator/rules/validation-rule';

@Component({
  template: '',
})
export abstract class ValidatedModalForm<ACT_ATTRS extends DTO> implements OnInit {
  ERROR_ATTR_PREFIX = 'Errors';

  formGroup!: FormGroup;

  abstract controls: Record<keyof ACT_ATTRS, any>;

  abstract validatorMap: ValidatorMap<ACT_ATTRS>;

  constructor(
    protected formBuilder: FormBuilder,
    protected dialogRef: MatDialogRef<any>,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.controls);
    Object.keys(this.formGroup.controls).forEach((attrName) => {
      const { isRequired } = this.validatorMap[attrName];
      if (isRequired) {
        this.formGroup.get(attrName)?.setValidators([Validators.required]);
      }

      this.formGroup.get(attrName)?.valueChanges.subscribe((value: string) => {
        this.validateAttrs(attrName, value, this);
      });
    });
  }

  private validateAttrs(attrName: string, value: unknown, formComponent: this): void {
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

  onSubmit(): void {
    if (this.formGroup.valid) {
      const formValues = this.formGroup.value;
      this.dialogRef.close(formValues);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
