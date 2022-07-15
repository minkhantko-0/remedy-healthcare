import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { pastWeekDays, pastWeekISO } from './chart-data';
import { ChartDataService } from '../../../services/chart-data.service';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
    isLoading = false;

    constructor(private chartDataServices: ChartDataService) {}

    ngOnInit(): void {
        const weekDays: string[] = [];
        for (let num of pastWeekDays) {
            switch (num) {
                case 0:
                    weekDays.unshift('Sun');
                    break;
                case 1:
                    weekDays.unshift('Mon');
                    break;
                case 2:
                    weekDays.unshift('Tue');
                    break;
                case 3:
                    weekDays.unshift('Wed');
                    break;
                case 4:
                    weekDays.unshift('Thu');
                    break;
                case 5:
                    weekDays.unshift('Fri');
                    break;
                case 6:
                    weekDays.unshift('Sat');
                    break;
            }
        }
        const start_date = pastWeekISO[6];
        const end_date = pastWeekISO[0];
        this.isLoading = true;
        this.chartDataServices
            .getPatientRegistrationRate(start_date, end_date)
            .subscribe(
                (res) => {
                    this.isLoading = false;
                    const data = Object.values(res);

                    const myChart = new Chart('myChart', {
                        type: 'line',
                        data: {
                            labels: weekDays,
                            datasets: [
                                {
                                    label: 'New Patients',
                                    data: data,
                                    backgroundColor: ['#CFF09E'],
                                    borderColor: ['#507C5C'],
                                    borderWidth: 3,
                                },
                            ],
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        },
                    });
                },
                (error) => {
                    this.isLoading = false;
                    console.log(error);
                }
            );
    }
}
