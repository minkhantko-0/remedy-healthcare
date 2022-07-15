import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    error = '';
    isLoading = false;

    constructor(private router: Router, private authService: AuthService) {}

    ngOnInit(): void {}

    onSignIn(form: NgForm) {
        this.isLoading = true;
        const { id, password } = form.value;
        this.authService.signIn(id, password).subscribe(
            (res) => {
                this.isLoading = false;
                localStorage.setItem('token', res.token);
                this.router.navigate(['home']);
            },

            (error) => {
                this.isLoading = false;
                this.error = error.error.message;
            }
        );
        form.reset();
    }

    onCloseAlert() {
        this.error = '';
    }
}
