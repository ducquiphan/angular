import {Component, input, output, signal} from '@angular/core';
import type {Ticket} from '../../../../model/ticket.model';

@Component({
	selector: 'app-ticket',
	imports: [],
	templateUrl: './ticket.component.html',
	styleUrl: './ticket.component.css',
})
export class TicketComponent {
	ticket = input.required<Ticket>({alias: 'data'});
	detailsVisible = signal(false);
	close = output();

	onUpdateStatus() {
		this.close.emit();
	}

	onToggleDetails() {
		// this.detailsVisible.set(!this.detailsVisible());
		this.detailsVisible.update((wasVisible) => {
			return !wasVisible;
		});
	}
}
