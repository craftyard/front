// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelsWidgetComponent } from './widgetes/model-widget/ui/component';

const routes: Routes = [
  { path: '', component: ModelsWidgetComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleRoutingModule { }
