// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/model/auth.guard';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { WrapperComponent } from 'app/widgets/wrapper/component';

const routes: Routes = [
  { path: '', redirectTo: 'workpage', pathMatch: 'full' },
  { path: 'auth', component: AuthPageComponent },
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'workpage',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
