import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeader } from 'features/header/header.component';
import { AppTreeComponent } from 'features/tree/app-tree.component';
import { WorkshopComponent } from 'pages/workshop/workshop.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppState } from '../features/service/AppState.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppTreeComponent,
    WorkshopComponent,
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
