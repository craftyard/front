import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopPage } from './pages/component';
import { AuthPageComponent } from './pages/auth/ui/component';

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  { path: 'workshop', component: WorkshopPage },
  { path: '', redirectTo: '/workshop', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
