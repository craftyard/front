import { Component, Input } from "@angular/core";
import { WorkId, color } from "../component";

@Component({
  selector: 'work-id',
  template: `
    <div id="card">
      <img src="../../../../assets/placeholder.jpg" alt="">
      <p>{{ item.name }}</p>
      <p>категория: {{ item.category }}</p>
      <p>color {{ item.color }}</p>
    </div>
  `,
  styleUrls: ['./style.css'],
})
export class ColorComponent {
  @Input() item!: color;
}