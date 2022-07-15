import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from '../../../Models/appointment-model';

@Component({
    selector: 'app-appointment-card',
    templateUrl: './appointment-card.component.html',
    styleUrls: ['./appointment-card.component.css'],
})
export class AppointmentCardComponent implements OnInit {
    @Input() appointment: Appointment | undefined;

    constructor() {}

    ngOnInit(): void {}
}
