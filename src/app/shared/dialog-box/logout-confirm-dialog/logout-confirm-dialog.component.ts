import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-logout-confirm-dialog',
    templateUrl: './logout-confirm-dialog.component.html',
    styleUrls: ['./logout-confirm-dialog.component.css'],
})
export class LogoutConfirmDialogComponent {
    @Input() message = 'Do You Want To Log Out?';
    @Output() close = new EventEmitter<void>();

    constructor(private authService: AuthService) {}

    onClose() {
        this.close.emit();
    }

      onConfirm() {
        this.authService.logOut();
    }

}
