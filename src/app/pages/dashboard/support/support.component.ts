import {Component, signal} from '@angular/core';
import {Ticket} from '../../../model/ticket.model';
import {NewTicketComponent} from './new-ticket/new-ticket.component';
import {TicketComponent} from './ticket/ticket.component';

@Component({
	selector: 'app-support',
	imports: [
		NewTicketComponent,
		TicketComponent,
	],
	templateUrl: './support.component.html',
	styleUrl: './support.component.css',
})
export class SupportComponent {
	tickets = signal<Ticket[]>([]);

	onAddTicket(newTicket: Ticket) {
		newTicket.id = Math.random().toString();
		this.tickets.update(oldTickets => {
			return [...oldTickets, newTicket];
		});
	}

	onCloseTicket(id: string) {
		this.tickets.update(oldTickets => {
			return oldTickets.map(ticket => {
				if (ticket.id === id) {
					return {...ticket, status: 'closed'};
				} else return ticket;
			});
		});
	}
}
