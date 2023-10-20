import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopComponent } from '../pages/workshop/workshop.component';
import { ToolsPageComponent } from '../pages/tools-page/tools-page.component';
const routes: Routes = [
  {path:'workshop', component: WorkshopComponent},
  {path:'tools', component: ToolsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
