import {Component, signal} from '@angular/core';
import {Ticket} from '../../../model/ticket.model';
import {NewTicketComponent} from './new-ticket/new-ticket.component';

@Component({
	selector: 'app-support',
	imports: [
		NewTicketComponent,
	],
	templateUrl: './support.component.html',
	styleUrl: './support.component.css',
})
export class SupportComponent {
	tickets = signal<Ticket[]>([]);
}
