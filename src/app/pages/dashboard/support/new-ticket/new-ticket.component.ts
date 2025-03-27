import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';

@Component({
	selector: 'app-new-ticket',
	imports: [
		FormsModule,
		NzFormModule,
		NzInputDirective,
		NzTextareaCountComponent,
		NzButtonComponent,
		NzIconModule,
	],
	templateUrl: './new-ticket.component.html',
	styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {

}
