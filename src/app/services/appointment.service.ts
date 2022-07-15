import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { AppointmentArray } from '../Models/appointment-model';

@Injectable({
    providedIn: 'root',
})
export class AppointmentService {
    constructor(private http: HttpClient) {}

    bookAppointment(doctor: string, patient: string) {
        return this.http.post(`${environment.host}make_appointment`, {
            doctor,
            patient,
        });
    }

    getAllAppointments() {
        return this.http.get<AppointmentArray>(
            `${environment.host}all_appointments`
        );
    }

    getLastTwoAppointments() {
        return this.http.get<AppointmentArray>(
            `${environment.host}all_appointments`,
            { params: { limit: 2 } }
        );
    }

    getTodayAppointmentCount() {
        return this.http.get<{ count: number }>(
            `${environment.host}today_appointments`
        );
    }
}
