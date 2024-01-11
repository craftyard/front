// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/shared/guards/auth.guard';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { AppPageComponent } from 'app/pages/app-page/ui/component';
import { ErrorPageComponent } from 'app/pages/error-page/ui/component';

const routes: Routes = [
  { path: '', redirectTo: 'myWorkshop', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  {
    path: '',
    component: AppPageComponent,
    children: [
      {
        path: 'myWorkshop',
        loadChildren: () => import('workshop/module').then((m) => m.WorkshopModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'subjectpage',
        loadChildren: () => import('subject/module').then((m) => m.SubjectModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'error-page/:id', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error-page/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
