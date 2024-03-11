import { Component, Input } from '@angular/core';
import { ModelAttrs } from 'cy-domain/src/model/domain-data/params';

@Component({
  selector: 'model-card-attrs',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ModelCardAttrsComponent {
  @Input() workshopModels!: ModelAttrs;
}
