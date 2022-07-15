import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TippyModule } from '@ngneat/helipopper';
import { SharedModule } from '../../shared/shared.module';

import { PatientsComponent } from './patients.component';
import { PatientCardComponent } from './patient-card/patient-card.component';

const routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
    },
];

@NgModule({
    declarations: [PatientsComponent, PatientCardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        TippyModule,
        SharedModule,
    ],
})
export class PatientsModule {}
