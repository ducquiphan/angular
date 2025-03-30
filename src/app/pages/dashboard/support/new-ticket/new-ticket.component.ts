import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';
import {ButtonComponent} from '../../../shared/button/button.component';
import {ControlComponent} from '../../../shared/control/control.component';

@Component({
	selector: 'app-new-ticket',
	imports: [
		FormsModule,
		NzFormModule,
		NzInputDirective,
		NzTextareaCountComponent,
		NzIconModule,
		ButtonComponent,
		ControlComponent,
	],
	templateUrl: './new-ticket.component.html',
	styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {

	onSubmit(title: string, request: string) {
		console.log('Submitted!');
		console.log(title);
		console.log(request);
	}
}
