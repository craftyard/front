import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../widgets/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { TreeComponent } from '../widgets/tree/tree.component';
import { MatListModule } from '@angular/material/list';
import { WorkshopComponent } from '../pages/workshop/workshop.component';
import { ToolsPageComponent } from '../pages/tools-page/tools-page.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    WorkshopComponent,
    ToolsPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
