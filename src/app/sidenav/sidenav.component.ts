import { Component, OnInit } from '@angular/core';
import { navTabsData } from './nav-tabs-data';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
    collapsed = true;
    navTabs = navTabsData;
    isLoggingOut = false;

    constructor(private authService: AuthService) {}

    ngOnInit(): void {}

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
    }

    closeNavBar(): void {
        this.collapsed = false;
    }

    onLogOut(): void {
        this.isLoggingOut = true;
    }

    onCancel(): void {
        this.isLoggingOut = false;
    }
}
