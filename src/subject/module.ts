import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from 'subject/pages/employee/ui/component';
import { SubjectRoutingModule } from 'subject/router';



@NgModule({
    declarations: [
        EmployeeComponent,
    ],
    imports: [
        CommonModule,
        SubjectRoutingModule
    ]
})
export class SubjectModule { }
