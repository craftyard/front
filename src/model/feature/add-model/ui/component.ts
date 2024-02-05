/* eslint-disable max-classes-per-file */
import { Component } from '@angular/core';

import { ModelCategory } from 'cy-domain/src/model/domain-data/params';
import { modelAttrsVMap } from 'cy-domain/src/model/domain-data/v-map';
import { BehaviorSubject } from 'rxjs';
import { ValidatorMap } from 'rilata/src/domain/validator/field-validator/types';
import { ValidatedModalForm } from '../../../../app/shared/ui-kit/validated-modal-from/validated-modal-from';

@Component({
  selector: 'add-model-feature',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AddModelComponent extends ValidatedModalForm
<{name: string, category: string}> {
  nameErrors = new BehaviorSubject<string[] | undefined>(undefined);

  categoryErrors = new BehaviorSubject<string[] | undefined>(undefined);

  categories: ModelCategory[] = ['Игрушки', 'Кухонная утварь', 'Мебель'];

  controls: Record<'name' | 'category', unknown[]> = {
    name: [''],
    category: [''],
  };

  validatorMap: ValidatorMap<{ name: string; category: string; }> = modelAttrsVMap;
}
