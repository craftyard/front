import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from './entities/workshop/component';
import { AddModelComponent } from './feature/add-model/ui/component';
import { WorkshopWidgetComponent } from './widgets/wokrshop-widget/ui/component';
import { UserProfileComponent } from './entities/user/ui/component';
import { WorkshopRoutingModule } from './router';
import { AppModule } from '../app/module';

@NgModule({
  declarations: [
    WorkshopComponent,
    AddModelComponent,
    WorkshopWidgetComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    WorkshopRoutingModule,
    AppModule,
  ],
})
export class WorkshopModule { }
