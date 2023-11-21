import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from 'workshop/pages/work-page/component';
import { WorkshopRoutingModule } from 'workshop/router';

@NgModule({
  declarations: [
    WorkPageComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
  ],
})
export class WorkshopModule { }
