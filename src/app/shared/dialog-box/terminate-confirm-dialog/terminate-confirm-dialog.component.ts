import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-terminate-confirm-dialog',
    templateUrl: './terminate-confirm-dialog.component.html',
    styleUrls: ['./terminate-confirm-dialog.component.css'],
})
export class TerminateConfirmDialogComponent {
    @Input() message = 'Terminate Employment?';
    @Output() close = new EventEmitter<void>();
    @Output() confirm = new EventEmitter<void>();

    constructor() {}

    onClose() {
        this.close.emit();
    }

    onConfirm() {
        this.confirm.emit();
    }
}
