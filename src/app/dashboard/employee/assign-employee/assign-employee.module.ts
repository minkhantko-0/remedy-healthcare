import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { AssignEmployeeComponent } from './assign-employee.component';

const routes: Routes = [
    {
        path: '',
        component: AssignEmployeeComponent,
    },
];

@NgModule({
    declarations: [AssignEmployeeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
    ],
})
export class AssignEmployeeModule {}
