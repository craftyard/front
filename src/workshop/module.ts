import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from 'workshop/entities/workshop-component/component';
import { WorkshopRoutingModule } from 'workshop/router';

@NgModule({
  declarations: [
    WorkshopComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
  ],
})
export class WorkshopModule { }
