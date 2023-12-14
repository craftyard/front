// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from 'workshop/entities/workshop/component';

const routes: Routes = [
  { path: '', component: WorkshopComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopRoutingModule { }
