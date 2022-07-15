import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutConfirmDialogComponent } from './dialog-box/logout-confirm-dialog/logout-confirm-dialog.component';
import { InviewLoaderComponent } from './inview-loader/inview-loader.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { TerminateConfirmDialogComponent } from './dialog-box/terminate-confirm-dialog/terminate-confirm-dialog.component';
import { RemoveConfirmDialogComponent } from './dialog-box/remove-confirm-dialog/remove-confirm-dialog.component';
import { AdminDialogComponent } from './dialog-box/admin-dialog/admin-dialog.component';
import {TippyModule} from "@ngneat/helipopper";

@NgModule({
    declarations: [
        LogoutConfirmDialogComponent,
        InviewLoaderComponent,
        AlertComponent,
        LoaderComponent,
        TerminateConfirmDialogComponent,
        RemoveConfirmDialogComponent,
        AdminDialogComponent,
    ],
  imports: [CommonModule, TippyModule],
  exports: [
    LogoutConfirmDialogComponent,
    InviewLoaderComponent,
    AlertComponent,
    LoaderComponent,
    TerminateConfirmDialogComponent,
    RemoveConfirmDialogComponent,
    AdminDialogComponent,
  ],
})
export class SharedModule {}
