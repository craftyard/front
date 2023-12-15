// src/root.module.ts
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from 'component';
import { AppRoutingModule } from 'router';
import { SubjectApi } from 'subject/shared/backend-api/subject-api.service';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [RootComponent],
  providers: [{
    provide: 'subjectApi', useClass: SubjectApi,
  }],
})
export class RootModule { }
