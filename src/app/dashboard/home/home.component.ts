import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import { GeneratedAdmin } from '../../Models/admin-model';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../Models/appointment-model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    isLoading = false;
    isAddingAdmin = false;
    error = '';
    generatedAdmin: GeneratedAdmin | undefined;
    latestAppointments: Appointment[] = [];

    constructor(
        private authService: AuthService,
        private appointmentService: AppointmentService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.appointmentService.getLastTwoAppointments().subscribe(
            (res) => {
                this.latestAppointments = res.appointments;
                this.isLoading = false;
            },
            (error) => {
                this.error = error.error.message;
                this.isLoading = false;
            }
        );
    }

    onAddAdmin() {
        this.isLoading = true;
        this.authService.addAdmin().subscribe(
            (res) => {
                this.isLoading = false;
                this.generatedAdmin = res;
                this.isAddingAdmin = true;
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onClose() {
        this.isAddingAdmin = false;
    }

    onCloseAlert() {
        this.error = '';
    }

    onViewAppointments() {
        this.router.navigate(['appointments']);
    }
}
