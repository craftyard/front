import { Component } from '@angular/core';

@Component({
  selector: 'workshop-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopComponent {
  workshopData = {
    name: 'Renat',
    adress: '4-й микрорайон, 4а',
    city: 'Уральск',

  };
  users = [
    {
      firstName:'Ренат',
      lastName:'Сагынгалиев',
    },
     {
      firstName:'Дамир',
      lastName:'Кубиев',
    },
     {
      firstName:'Сагындык',
      lastName:'Ислям',
    },
  ]
}
