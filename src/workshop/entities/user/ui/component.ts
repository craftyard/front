import { Component, Input } from '@angular/core';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';

@Component({
  selector: 'workshop-user-profile-entities',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopUserProfileComponent {
  @Input() UserAttrs!:UserAttrs[];
}
