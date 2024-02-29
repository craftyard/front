// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsWidgetComponent } from './widgetes/models-widget/ui/component';
import { ModelWidgetComponent } from './widgetes/model-widget/coponent';

const routes: Routes = [
  { path: '', component: ModelsWidgetComponent },
  { path: 'Model/:id', component: ModelWidgetComponent },
  { path: '**', redirectTo: '/error-page/404' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule { }
