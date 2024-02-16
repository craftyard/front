import { Component, Input } from '@angular/core';
import { UserProfile } from 'cy-domain/src/subject/domain-data/user/params';

@Component({
  selector: 'user-info-entities',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class UserProfileComponent {
  @Input() userProfile!:UserProfile[];
}
