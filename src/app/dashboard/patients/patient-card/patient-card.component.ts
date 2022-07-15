import { Component, Input, OnInit } from '@angular/core';

import { Patient } from './patient.model';

import { EmployeeDataService } from '../../../services/employee-data.service';

@Component({
    selector: 'app-patient-card',
    templateUrl: './patient-card.component.html',
    styleUrls: ['./patient-card.component.css'],
})
export class PatientCardComponent implements OnInit {
    isRemoving = false;
    isLoading = false;
    error = '';
    @Input() patient: Patient = {
        profile: '',
        name: '',
        address: '',
        dateOfBirth: '',
        _id: '',
        email: '',
        gender: '',
        diagnosis: '',
    };

    constructor(private employeeDataService: EmployeeDataService) {}

    ngOnInit(): void {}

    onRemove() {
        this.isRemoving = true;
    }

    onConfirm(_id: string) {
        this.isLoading = true;
        this.employeeDataService.deleteEmployeeOrPatient(_id).subscribe(
            (res) => {
                location.reload();
            },
            (error) => {
                this.error = error.error.message;
            }
        );
    }

    onCancel() {
        this.isRemoving = false;
    }

    onCloseAlert() {
        this.error = '';
    }
}
