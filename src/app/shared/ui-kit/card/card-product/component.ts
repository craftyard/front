import { Component, Input } from "@angular/core";
import { ModelCardAttrs } from "../component";

@Component({
  selector: 'model-card-attrs',
  template: `
    <div id="card">
      <img src="../../../../assets/placeholder.jpg" alt="">
      <p>{{ item.name }}</p>
      <p>категория: {{ item.category }}</p>
    </div>
  `,
  styleUrls: ['./style.css'],
})
export class ModelCardAttrsComponent {
  @Input() item!: ModelCardAttrs;
}