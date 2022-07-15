import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class ChartDataService {
    constructor(private http: HttpClient) {}

    getPatientRegistrationRate(start_date: string, end_date: string) {
        return this.http.get(`${environment.host}get_patient_rate`, {
            params: { start_date, end_date },
        });
    }

    getEmploymentRate(date: string) {
        return this.http.get(`${environment.host}get_staff_rate`, {
            params: { date },
        });
    }
}
