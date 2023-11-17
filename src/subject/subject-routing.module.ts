// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeerComponent } from './pages/employeer/employeer.component';

const routes: Routes = [
  { path: '', component: EmployeerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectRoutingModule { }
