import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment.prod';

import { Admin, GeneratedAdmin } from '../Models/admin-model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}

    signIn(user_id: string, password: string): Observable<Admin> {
        return this.http.post<Admin>(`${environment.host}login`, {
            user_id,
            password,
        });
    }

    isLoggedIn(): Boolean {
        return localStorage.getItem('token') != null;
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    logOut(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    addAdmin() {
        return this.http.post<GeneratedAdmin>(
            `${environment.host}add_admin`,
            null
        );
    }
}
