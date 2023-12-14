import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from 'workshop/entities/workshop-component/component';
import { WorkshopRoutingModule } from 'workshop/router';
import { TextElementComponent } from 'app/shared/ui-kit/text-element/component';

@NgModule({
  declarations: [
    WorkshopComponent,
    TextElementComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
  ],
})
export class WorkshopModule { }
