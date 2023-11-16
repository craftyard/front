import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LogOutComponent } from 'app/feature/logout-btn/ui/component';
import { CurrentUserComponent } from 'app/entities/user-header/ui/component';
import { LoginButtonComponent } from 'app/feature/login-btn/ui/component';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeader } from './widgets/app-header/component';
import { AppComponent } from './widgets/app/component';
import { AppTreeComponent } from './entities/app-tree/component';
import { AppState } from './model/app-state';
import { WorkshopPage } from './pages/component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    WorkshopPage,
    LogOutComponent,
    CurrentUserComponent,
    LoginButtonComponent,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [AppState],
  bootstrap: [AppComponent],
})
export class AppModule { }
