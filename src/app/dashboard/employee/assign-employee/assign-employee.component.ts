import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { EmployeeDataService } from '../../../services/employee-data.service';

@Component({
    selector: 'app-assign-employee',
    templateUrl: './assign-employee.component.html',
    styleUrls: ['./assign-employee.component.css'],
})
export class AssignEmployeeComponent implements OnInit {
    image: File | undefined | null;
    imageUrl = '';
    isLoading = false;
    error = '';
    isAssigningDoctor = false;

    constructor(
        private employeeDataService: EmployeeDataService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    onUpload(event: Event) {
        const { files } = event.target as HTMLInputElement;
        if (files && files.length) {
            const image = files.item(0);
            const reader = new FileReader();
            reader.onload = (data: any) => {
                const imageURl = data.target.result;
                this.image = image;
                this.imageUrl = imageURl;
            };
            if (image) {
                reader.readAsDataURL(image);
            }
        }
    }

    onAssignDoctor(condition: boolean) {
        this.isAssigningDoctor = condition;
    }

    onAssign(f: NgForm) {
        const { name, email, address, degree, dateOfBirth, role, gender } =
            f.value;

        const data = new FormData();
        if (this.image) {
            data.append('profile', this.image);
        }

        data.append('name', name);
        data.append('email', email);
        data.append('address', address);
        data.append('degree', degree);
        data.append('role', role);
        data.append('dateOfBirth', dateOfBirth);
        data.append('gender', gender);

        if (this.isAssigningDoctor) {
            const { appointmentFee, tokenAmount } = f.value;
            data.append('appointment_fee', appointmentFee);
            data.append('daily_token_numbers', tokenAmount);
        }

        this.isLoading = true;
        this.employeeDataService.assignNewEmployee(data).subscribe(
            (res) => {
                this.isLoading = false;
                this.router.navigate(['employee']);
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onCloseAlert() {
        this.error = '';
    }
}
