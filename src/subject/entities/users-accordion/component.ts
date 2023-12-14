import { Component } from '@angular/core';

@Component({
  selector: 'user-accordion',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class UsersAccordion {
  HEADERS: string[] = ['admin', 'manager'];

  currentIndex: number | null = null;

  sections = [
    {
      role: 'admin',
      firstname: 'Ренат',
      lastname: 'Сагынгалиев',

    },
    {
      role: 'admin',
      firstname: 'Дамир',
      lastname: 'Кубиев',
    },
    {
      role: 'manager',
      firstname: 'Саша',
      lastname: 'Андрей',
    },
  ];

  expand(index: number) {
    this.currentIndex = this.currentIndex === index ? null : index;
  }
}
