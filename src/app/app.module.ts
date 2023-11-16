import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { LogOutComponent } from 'app/feature/logout-btn/ui/component';
import { CurrentUserComponent } from 'app/entities/user-header/ui/component';
import { TelegramLoginWidgetComponent } from 'app/feature/login-btn/ui/component';
import { AuthPageComponent } from 'app/pages/auth/ui/component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeader } from './widgets/app-header/component';
import { AppComponent } from './component';
import { AppTreeComponent } from './entities/app-tree/component';
import { AppState } from './model/app-state';
import { WorkshopPage } from './pages/component';
import { WarapperComponent } from './widgets/warapper/warapper.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './model/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    WorkshopPage,
    LogOutComponent,
    CurrentUserComponent,
    TelegramLoginWidgetComponent,
    AuthPageComponent,
    WarapperComponent,
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
