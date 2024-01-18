// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkshopWidgetComponent } from 'workshop/widgets/wokrshop-widget/ui/component';

const routes: Routes = [
  { path: '', component: WorkshopWidgetComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopRoutingModule { }
