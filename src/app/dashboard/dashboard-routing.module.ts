import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadChildren: () =>
                    import('./home/home.module').then((mod) => mod.HomeModule),
            },
            {
                path: 'employee',
                loadChildren: () =>
                    import('./employee/employee.module').then(
                        (mod) => mod.EmployeeModule
                    ),
            },
            {
                path: 'patients',
                loadChildren: () =>
                    import('./patients/patients.module').then(
                        (mod) => mod.PatientsModule
                    ),
            },
            {
                path: 'register',
                loadChildren: () =>
                    import(
                        './patients/patient-registration/patient-registration.module'
                    ).then((mod) => mod.PatientRegistrationModule),
            },
            {
                path: 'assign',
                loadChildren: () =>
                    import(
                        './employee/assign-employee/assign-employee.module'
                    ).then((mod) => mod.AssignEmployeeModule),
            },
            {
                path: 'appointments',
                loadChildren: () =>
                    import('./appointments/appointments.module').then(
                        (mod) => mod.AppointmentsModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
