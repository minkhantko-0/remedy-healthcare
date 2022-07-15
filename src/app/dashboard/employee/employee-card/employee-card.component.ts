import { Component, Input, OnInit } from '@angular/core';

import { Employee } from '../employee-model';

import { EmployeeDataService } from '../../../services/employee-data.service';

@Component({
    selector: 'app-employee-card',
    templateUrl: './employee-card.component.html',
    styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
    isLoading = false;
    error = '';
    isTerminating = false;
    @Input() employee: Employee = {
        profile: '',
        name: '',
        role: '',
        address: '',
        dateOfBirth: '',
        _id: '',
        email: '',
        gender: '',
        degree: '',
    };

    constructor(private employeeDataService: EmployeeDataService) {}

    ngOnInit(): void {}

    onTerminate() {
        this.isTerminating = true;
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
        this.isTerminating = false;
    }

    onCloseAlert() {
        this.error = '';
    }
}
