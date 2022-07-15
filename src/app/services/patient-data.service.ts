import { Injectable } from '@angular/core';
import {Patient, User} from '../dashboard/patients/patient-card/patient.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class PatientDataService {
    constructor(private http: HttpClient) {}

    getAllPatients() {
        return this.http.get<User>(`${environment.host}get_users_by_role`, {
            params: { role: 'Patient' },
        });
    }

    registerNewPatient(data: FormData) {
        return this.http.post(`${environment.host}add_user`, data);
    }

    searchPatientByName(name: string) {
        return this.http.get<User>(`${environment.host}search_users`, {
            params: { role: 'Patient', name },
        });
    }

    getPatientByEmail(email: string) {
        return this.http.get<Patient>(`${environment.host}patient_by_email`, {
            params: { email },
        });
    }
}
