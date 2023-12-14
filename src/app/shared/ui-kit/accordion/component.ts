import { Component, Input } from '@angular/core';

@Component({
  selector: 'accordion-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AccordionComponent {
  isOpen = false;
  @Input() header?: string = '';

  openAccordion(): void {
    this.isOpen = !this.isOpen
  }
}
