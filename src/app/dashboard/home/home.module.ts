import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TippyModule } from '@ngneat/helipopper';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { ChartComponent } from './chart/chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent, ChartComponent, BarChartComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TippyModule,
        FormsModule,
        SharedModule,
    ],
})
export class HomeModule {}
