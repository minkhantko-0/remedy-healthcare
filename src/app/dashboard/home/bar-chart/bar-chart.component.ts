import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartDataService } from '../../../services/chart-data.service';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
    isLoading = false;

    constructor(private chartDataService: ChartDataService) {}

    ngOnInit(): void {
        this.isLoading = true;
        const date = new Date().toISOString();
        this.chartDataService.getEmploymentRate(date).subscribe(
            (res) => {
                this.isLoading = false;
                const data = Object.values(res);
                const myChart = new Chart('myChart2', {
                    type: 'bar',
                    data: {
                        labels: [
                            'Doctors',
                            'Nurses',
                            'Rapid Response',
                            'Security',
                            'Social Workers',
                        ],
                        datasets: [
                            {
                                label: 'Newly Assigned',
                                data: data,
                                backgroundColor: [
                                    '#507C5C',
                                    '#f44786',
                                    '#FF6F50',
                                    '#1da1f2',
                                    '#36c225',
                                ],
                                borderColor: [
                                    '#42664c',
                                    '#ed1b76',
                                    '#FF532E',
                                    '#1877f2',
                                    '#23a315',
                                ],
                                borderWidth: 3,
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
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
            }
        );
    }
}
