import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppointmentService } from '../../services/appointment.service';
import { PatientDataService } from '../../services/patient-data.service';
import { EmployeeDataService } from '../../services/employee-data.service';
import { Appointment } from '../../Models/appointment-model';

@Component({
    selector: 'app-appointments',
    templateUrl: './appointments.component.html',
    styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
    appointments: Appointment[] = [];
    count: number = 0;
    isLoading = false;
    error = '';

    constructor(
        private appointmentService: AppointmentService,
        private patientService: PatientDataService,
        private employeeService: EmployeeDataService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.appointmentService.getAllAppointments().subscribe(
            (res) => {
                this.appointments = res.appointments;
                this.appointmentService
                    .getTodayAppointmentCount()
                    .subscribe((res) => {
                        this.isLoading = false;
                        this.count = res.count;
                    });
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onBookAppt(f: NgForm) {
        const { doctorEmail, patientEmail } = f.value;
        this.isLoading = true;
        let doctor = '';
        let patient = '';
        this.employeeService.getDoctorByEmail(doctorEmail).subscribe(
            (res) => {
                doctor = res._id;
                this.patientService.getPatientByEmail(patientEmail).subscribe(
                    (res) => {
                        patient = res._id;
                        this.appointmentService
                            .bookAppointment(doctor, patient)
                            .subscribe(
                                (res) => {
                                    location.reload();
                                },
                                (error) => {
                                    this.error = error.error.message;
                                }
                            );
                    },
                    (error) => {
                        this.isLoading = false;
                        this.error = error;
                    }
                );
            },
            (error) => {
                this.isLoading = false;
                this.error = error;
            }
        );
    }

    onCloseAlert() {
        this.error = '';
    }
}
