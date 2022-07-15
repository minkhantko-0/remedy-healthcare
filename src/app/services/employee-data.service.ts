import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import {Employee, Staff} from '../dashboard/employee/employee-model';

@Injectable({
    providedIn: 'root',
})
export class EmployeeDataService {
    constructor(private http: HttpClient) {}

    assignNewEmployee(data: FormData) {
        return this.http.post(`${environment.host}add_user`, data);
    }

    getAllEmployee() {
        return this.http.get<Staff>(`${environment.host}all_employees`);
    }

    getEmployeeByRole(role: string) {
        return this.http.get<Staff>(`${environment.host}get_users_by_role`, {
            params: { role },
        });
    }

    searchEmployeeByName(name: string) {
        return this.http.get<Staff>(`${environment.host}search_staffs`, {
            params: { name },
        });
    }

    searchEmployeeByNameAndRole(name: string, role: string) {
        return this.http.get<Staff>(`${environment.host}search_users`, {
            params: { name, role },
        });
    }

    deleteEmployeeOrPatient(_id: string) {
        return this.http.delete(`${environment.host}users/${_id}`);
    }

    getDoctorByEmail(email: string) {
        return this.http.get<Employee>(`${environment.host}doctor_by_email`, {
            params: { email },
        });
    }
}
