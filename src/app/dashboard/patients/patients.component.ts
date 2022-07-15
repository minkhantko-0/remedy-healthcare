import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from './patient-card/patient.model';

import { PatientDataService } from '../../services/patient-data.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
    results: Patient[] = [];
    patientCount = 0;
    isLoading = false;
    error = '';

    constructor(
        private router: Router,
        private patientDataServices: PatientDataService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.patientDataServices.getAllPatients().subscribe(
            (res) => {
                this.isLoading = false;
                this.results = res.users;
                this.patientCount = this.results.length;
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onSearchPatients(f: NgForm) {
        this.isLoading = true;
        const { searchContent } = f.value;
        this.patientDataServices.searchPatientByName(searchContent).subscribe(
            (res) => {
                this.isLoading = false;
                this.results = res.users;
            },
            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
    }

    onReload() {
        location.reload();
    }

    onRegister() {
        this.router.navigate(['register']);
    }

    onCloseAlert() {
        this.error = '';
    }
}
