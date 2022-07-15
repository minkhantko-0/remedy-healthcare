import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'app-admin-dialog',
    templateUrl: './admin-dialog.component.html',
    styleUrls: ['./admin-dialog.component.css'],
})
export class AdminDialogComponent {
    constructor(private clipboardApi: ClipboardService) {}

    @Input() id: string | undefined;
    @Input() password: string | undefined;

    message = 'Write Down The Following. You Only Get This Once! ';
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    onCopyId() {
        if (this.id) this.clipboardApi.copyFromContent(this.id);
    }

    onCopyPwd() {
        if (this.password) this.clipboardApi.copyFromContent(this.password);
    }
}
