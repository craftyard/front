import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './pages/auth/ui/component';
import { AppPageComponent } from './pages/app-page/ui/component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ErrorPageComponent } from './pages/error-page/ui/component';

const routes: Routes = [
  { path: '', redirectTo: 'myWorkshop', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  {
    path: '',
    component: AppPageComponent,
    children: [
      {
        path: 'myWorkshop',
        loadChildren: () => import('../workshop/module').then((m) => m.WorkshopModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'subject',
        loadChildren: () => import('../subject/module').then((m) => m.SubjectModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'models',
        loadChildren: () => import('../model/module').then((m) => m.ModelModule),
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
export class AppRoutingModule {}
