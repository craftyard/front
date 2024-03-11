import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './entities/workshop/component';
import { WorkshopWidgetComponent } from './widgets/wokrshop-widget/ui/component';
import { WorkshopUserProfileComponent } from './entities/user/ui/component';
import { WorkshopRoutingModule } from './router';
import { AppModule } from '../app/module';

@NgModule({
  declarations: [
    WorkshopComponent,
    WorkshopWidgetComponent,
    WorkshopUserProfileComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    AppModule,
  ],
})
export class WorkshopModule { }
