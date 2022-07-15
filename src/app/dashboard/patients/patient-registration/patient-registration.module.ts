import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRegistrationComponent } from './patient-registration.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: PatientRegistrationComponent,
    },
];

@NgModule({
    declarations: [PatientRegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, SharedModule],
})
export class PatientRegistrationModule {}
