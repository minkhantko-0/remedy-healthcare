import { Employee } from '../dashboard/employee/employee-model';
import { Patient } from '../dashboard/patients/patient-card/patient.model';

export class Appointment {
    constructor(
        public _id: string,
        public createdAt: string,
        public doctor: Employee,
        public patient: Patient,
        public fee: number,
        public date: string
    ) {}
}

export class AppointmentArray {
    constructor(public appointments: Appointment[], public count: number) {}
}
