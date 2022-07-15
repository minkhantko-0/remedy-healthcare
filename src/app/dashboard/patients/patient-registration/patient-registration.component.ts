import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientDataService } from '../../../services/patient-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-patient-registration',
    templateUrl: './patient-registration.component.html',
    styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent implements OnInit {
    image: any;
    imageUrl = '';
    isLoading = false;
    error = '';

    constructor(
        private patientDataService: PatientDataService,
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

    onRegister(form: NgForm) {
        const { name, email, address, diagnosis, dateOfBirth, gender } =
            form.value;
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('address', address);
        data.append('diagnosis', diagnosis);
        data.append('dateOfBirth', dateOfBirth);
        data.append('gender', gender);
        data.append('role', 'Patient');
        if (this.image) {
            data.append('profile', this.image);
        }
        this.isLoading = true;
        this.patientDataService.registerNewPatient(data).subscribe(
            (res) => {
                this.isLoading = false;
                this.router.navigate(['patients']);
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
