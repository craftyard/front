// src/root.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from 'root.component';
import { AppRoutingModule } from 'root.router.module';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  bootstrap: [RootComponent],
})
export class RootModule { }
