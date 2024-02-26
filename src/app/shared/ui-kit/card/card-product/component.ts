import {  Component, Input } from "@angular/core";
import { ModelCardAttrs } from "../component";


@Component({
  selector: 'model-card-attrs',
  template: `
    <div id="card">
     <img-slider [images]="model.images" [width]="200"></img-slider>
      <div id='card-text'>
        <p id='card-title'>{{ model.name }}</p>
        <p id='card-cat'>категория: {{ model.category }}</p>
     </div>
    </div>
  `,
  styleUrls: ['../style.css'],
})
export class ModelCardAttrsComponent  {
 

  @Input() model!: ModelCardAttrs;

}