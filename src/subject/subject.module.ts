import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeerComponent } from './pages/employeer/employeer.component';
import { SubjectRoutingModule } from './subject-routing.module';

@NgModule({
  declarations: [
    EmployeerComponent,
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
  ],
})
export class SubjectModule { }
