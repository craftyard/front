// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkshopWidgetsComponent } from 'workshop/widgets/wokrshop-widgets/ui/component';

const routes: Routes = [
  { path: '', component: WorkshopWidgetsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopRoutingModule { }
