import {Component} from '@angular/core';
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

}
