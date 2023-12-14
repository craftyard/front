import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'subject/pages/employee/ui/component';
import { SubjectRoutingModule } from 'subject/router';
import { UsersAccordion } from 'subject/entities/users-accordion/component';

@NgModule({
  declarations: [
    EmployeeComponent,
    UsersAccordion,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
  ],
})
export class SubjectModule { }
