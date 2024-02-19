import { Component, Input } from "@angular/core";
import { WorkId } from "../component";

@Component({
  selector: 'work-id',
  template: `
    <div id="card">
      <img src="../../../../assets/placeholder.jpg" alt="">
      <p>{{ item.name }}</p>
      <p>категория: {{ item.category }}</p>
      <p>price {{ item.modelId }}</p>
    </div>
  `,
  styleUrls: ['./style.css'],
})
export class WorkIdComponent {
  @Input() item!: WorkId;
}