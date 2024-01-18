import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from 'workshop/entities/workshop/component';
import { WorkshopRoutingModule } from 'workshop/router';
import { AppModule } from 'app/module';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';
import { WorkshopWidgetComponent } from 'workshop/widgets/wokrshop-widget/ui/component';
import { UserProfileComponent } from 'workshop/entities/user/ui/component';

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
