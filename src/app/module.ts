import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { AppComponent } from './component';
import { AppHeader } from './widgets/app-header/component';
import { AppTreeComponent } from './widgets/app-tree/component';
import { LogOutComponent } from './feature/logout-btn/ui/component';
import { CurrentUserComponent } from './entities/user-header/ui/component';
import { LoginButtonComponent } from './feature/login-btn/ui/component';
import { AuthPageComponent } from './pages/auth/ui/component';
import { AppPageComponent } from './pages/app-page/ui/component';
import { TreeItemComponent } from './entities/tree-item/ui/component';
import { TextElementComponent } from './shared/ui-kit/text-element/component';
import { AccordionComponent } from './shared/ui-kit/accordion/component';
import { ErrorPageComponent } from './pages/error-page/ui/component';
import { AlertComponent } from './shared/ui-kit/alert/component';
import { AppRoutingModule } from './router';
import { AuthGuard } from './shared/guards/auth.guard';
import { AppState } from './shared/states/app-state';
import { CardItemComponent } from './shared/ui-kit/card/component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    LogOutComponent,
    CurrentUserComponent,
    LoginButtonComponent,
    AuthPageComponent,
    AppPageComponent,
    TreeItemComponent,
    TextElementComponent,
    AccordionComponent,
    ErrorPageComponent,
    AlertComponent,
    CardItemComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
  providers: [AppState, AuthGuard, AlertComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }],
  exports: [
    TextElementComponent,
    AccordionComponent,
    CardItemComponent,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class AppModule { }
