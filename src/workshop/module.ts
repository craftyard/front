import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopComponent } from 'workshop/entities/workshop/component';
import { WorkshopRoutingModule } from 'workshop/router';
import { AppModule } from 'app/module';

@NgModule({
    declarations: [
        WorkshopComponent,
    ],
    imports: [
        CommonModule,
        WorkshopRoutingModule,
        AppModule,
    ]
})
export class WorkshopModule { }
