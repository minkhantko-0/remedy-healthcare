import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TippyModule } from '@ngneat/helipopper';

import { DashboardComponent } from './dashboard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [DashboardComponent, SidenavComponent],
    imports: [CommonModule, DashboardRoutingModule, TippyModule, SharedModule],
})
export class DashboardModule {}
