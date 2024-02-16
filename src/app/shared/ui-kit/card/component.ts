import { Component, Input } from '@angular/core';

export type ModelCardAttrs = {
    name:string,
    category:string
}
@Component({
  selector: 'card-item',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class CardItemComponent<T extends ModelCardAttrs> {
@Input() item?:T;
}
