import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { WorkshopComponent } from 'workshop/pages/component';
import { LogOutComponent } from 'workshop/entities/logout-btn/ui/component';
import { CurrentUserComponent } from 'workshop/entities/user-header/ui/component';
import { CurrentUserWidget } from 'workshop/widgets/user-widget/ui/component';
import { AppHeader } from './ui/app-header/component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from './model/app-state';
import { AppComponent } from './ui/app/component';
import { AppTreeComponent } from './ui/app-tree/component';

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
