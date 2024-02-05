import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app/module';
import { ModelsWidgetComponent } from './widgetes/models-widget/ui/component';
import { ModuleRoutingModule } from './router';
import { AddModelComponent } from './feature/add-model/ui/component';

@NgModule({
  declarations: [
    ModelsWidgetComponent,
    AddModelComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    AppModule,
  ],
})
export class ModelModule { }
