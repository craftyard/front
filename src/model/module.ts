import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app/module';
import { ModelsWidgetComponent } from './widgetes/models-widget/ui/component';
import { ModuleRoutingModule } from './router';
import { AddModelComponent } from './feature/add-model/ui/component';
import { AddModelBtnComponent } from './feature/add-model-btn/component';
import { ModelCardAttrsComponent } from './entities/model-card/component';
import { ModelWidgetComponent } from './widgetes/model-widget/component';

@NgModule({
  declarations: [
    ModelsWidgetComponent,
    AddModelComponent,
    AddModelBtnComponent,
    ModelCardAttrsComponent,
    ModelWidgetComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    AppModule,
  ],
})
export class ModelModule { }
