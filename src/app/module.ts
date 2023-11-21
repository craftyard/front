import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LogOutComponent } from 'app/feature/logout-btn/ui/component';
import { CurrentUserComponent } from 'app/entities/user-header/ui/component';
import { LoginButtonComponent } from 'app/feature/login-btn/ui/component';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { CommonModule } from '@angular/common';
import { AppHeader } from 'app/widgets/app-header/component';
import { AppComponent } from 'app/component';
import { AppState } from 'app/model/app-state';
import { AppTreeComponent } from 'app/entities/app-tree/component';
import { WrapperComponent } from 'app/widgets/wrapper/component';
import { AppRoutingModule } from 'app/router';
import { AuthGuard } from 'app/model/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    LogOutComponent,
    CurrentUserComponent,
    LoginButtonComponent,
    AuthPageComponent,
    WrapperComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [AppState, AuthGuard],
})
export class AppModule { }
