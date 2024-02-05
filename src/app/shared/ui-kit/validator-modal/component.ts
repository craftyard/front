import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DTO } from 'rilata/src/domain/dto';
import { ValidatorMap } from 'rilata/src/domain/validator/field-validator/types';
import { validatorUtils } from '../../validatorUtils';

@Component({
  template: '<h1></h1>',
})
export abstract class ValidatorFormModalComponent
< ACT_ATTRS extends DTO> {
  formGroup!: FormGroup;

  abstract controls: Record<keyof ACT_ATTRS, any>;

  abstract validatorMap: ValidatorMap<ACT_ATTRS>;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected formBuilder: FormBuilder,
    protected dialogRef: MatDialogRef<any>,
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(this.controls);
    // @ts-ignore
    validatorUtils.bindValidators(this);
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
