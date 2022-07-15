import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee-model';
import { EmployeeDataService } from '../../services/employee-data.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
    currentlyShowingResults: Employee[] = [];
    isLoading = false;
    error = '';
    selected = 'All';
    employeeRoles = [
        {
            value: 'All',
            name: 'All Employees',
        },
        {
            value: 'Doctor',
            name: 'Doctors',
        },
        {
            value: 'Nurse',
            name: 'Nurses',
        },
        {
            value: 'Rapid Response',
            name: 'Rapid Response',
        },
        {
            value: 'Security',
            name: 'Security',
        },
        {
            value: 'Social Worker',
            name: 'Social Workers',
        },
    ];

    constructor(
        private router: Router,
        private employeeDataService: EmployeeDataService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.employeeDataService.getAllEmployee().subscribe(
            (res) => {
                this.isLoading = false;
                this.currentlyShowingResults = res.users;
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onSelectRole(value: string) {
        this.selected = value;
        if (value === 'All') {
            this.ngOnInit();
        } else {
            this.isLoading = true;
            this.employeeDataService.getEmployeeByRole(value).subscribe(
                (res) => {
                    this.isLoading = false;
                    this.currentlyShowingResults = res.users;
                },
                (error) => {
                    this.isLoading = false;
                    this.error = error.error.message;
                }
            );
        }
    }

    onSearchEmployee(f: NgForm) {
        this.isLoading = true;
        const { searchContent } = f.value;
        if (this.selected === 'All') {
            this.employeeDataService
                .searchEmployeeByName(searchContent)
                .subscribe(
                    (res) => {
                        this.isLoading = false;
                        this.currentlyShowingResults = res.users;
                    },
                    (error) => {
                        this.isLoading = false;
                        this.error = error.error.message;
                    }
                );
        } else {
            this.employeeDataService
                .searchEmployeeByNameAndRole(searchContent, this.selected)
                .subscribe(
                    (res) => {
                        this.isLoading = false;
                        this.currentlyShowingResults = res.users;
                    },
                    (error) => {
                        this.isLoading = false;
                        this.error = error.error.message;
                    }
                );
        }
        f.reset();
    }

    onAssign() {
        this.router.navigate(['assign']);
    }

    onCloseAlert() {
        this.error = '';
    }
}
