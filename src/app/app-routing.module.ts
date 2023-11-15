// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopPage } from './pages/component';
import { AuthPageComponent } from './pages/auth/ui/component';
import { AuthGuard } from 'app/model/auth.guard';
import { WarapperComponent } from './widgets/warapper/warapper.component';
import { UserProfileComponent } from 'workshop/entities/user/ui/component';

const routes: Routes = [
  { path: 'auth', component: AuthPageComponent },
  {
    path: '', component: WarapperComponent, children: [
      {
        path: 'workshop', component: WorkshopPage, canActivate: [AuthGuard]
      },
      {
        path: 'user', component: UserProfileComponent, canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
