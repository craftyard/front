import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './pages/employee/ui/component';
import { SubjectRoutingModule } from './router';

@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
  ],
})
export class SubjectModule { }
