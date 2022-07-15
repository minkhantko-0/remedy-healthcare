import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-remove-confirm-dialog',
    templateUrl: './remove-confirm-dialog.component.html',
    styleUrls: ['./remove-confirm-dialog.component.css'],
})
export class RemoveConfirmDialogComponent {
    constructor() {}

    @Input() message = 'Do You Want To Remove This Patient?';
    @Output() close = new EventEmitter<void>();
    @Output() confirm = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    onConfirm() {
        this.confirm.emit();
    }
}
