import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-element',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class TextElementComponent {
 @Input() label?: string = '';

 @Input() value: string = '';
}
