import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPageComponent } from './pages/work-page/work-page.component';
import { WorkshopRoutingModule } from './workshop-routing.module';

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
