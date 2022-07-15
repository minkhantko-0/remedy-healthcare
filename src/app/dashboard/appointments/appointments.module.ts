import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TippyModule } from '@ngneat/helipopper';
import { SharedModule } from '../../shared/shared.module';

import { AppointmentCardComponent } from './appointment-card/appointment-card.component';
import { AppointmentsComponent } from './appointments.component';

const routes: Routes = [
    {
        path: '',
        component: AppointmentsComponent,
    },
];

@NgModule({
    declarations: [
        AppointmentsComponent,
        AppointmentCardComponent,
        AppointmentCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        TippyModule,
    ],
})
export class AppointmentsModule {}
