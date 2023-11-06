import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { WorkshopComponent } from 'workshop/pages/component';
import { LogOutComponent } from 'app/entities/logout-btn/ui/component';
import { CurrentUserComponent } from 'app/entities/current-user/ui/component';
import { CurrentUserWidget } from 'app/widgets/user-widget/ui/component';
import { AppRoutingModule } from './app-routing.module';
import { AppHeader } from './entities/app-header/component';
import { AppComponent } from './widgets/app/component';
import { AppTreeComponent } from './entities/app-tree/component';
import { AppState } from './model/app-state';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    WorkshopComponent,
    LogOutComponent,
    CurrentUserComponent,
    CurrentUserWidget,
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
