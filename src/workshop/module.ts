import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from 'workshop/entities/workshop/component';
import { WorkshopRoutingModule } from 'workshop/router';
import { AppModule } from 'app/module';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';
import { WorkshopWidgetsComponent } from 'workshop/widgets/wokrshop-widgets/ui/component';

@NgModule({
  declarations: [
    WorkshopComponent,
    AddModelComponent,
    WorkshopWidgetsComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    AppModule,
  ],
})
export class WorkshopModule { }
