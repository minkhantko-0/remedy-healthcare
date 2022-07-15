import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TippyModule } from '@ngneat/helipopper';
import { SharedModule } from '../../shared/shared.module';

import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
    },
];

@NgModule({
    declarations: [EmployeeComponent, EmployeeCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        TippyModule,
        SharedModule,
    ],
})
export class EmployeeModule {}
