import {AfterViewInit, Component, ElementRef, model, OnInit, output, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';
import type {Ticket} from '../../../../model/ticket.model';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
	@ViewChild('form') formEl?: ElementRef<HTMLFormElement>;
	add = output<Ticket>();
	enteredTitle = model('');
	enteredRequest = model('');

	// private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

	onSubmit() {
		this.add.emit({
			title: this.enteredTitle(),
			request: this.enteredRequest(),
			status: 'open',
		});
		this.enteredRequest.set('');
		this.enteredTitle.set('');
	}

	ngAfterViewInit(): void {
		console.log('AFTER VIEW INIT!');
		console.log(this.formEl?.nativeElement);
	}

	ngOnInit(): void {
		console.log('ON INIT!');
		console.log(this.formEl?.nativeElement);
	}
}
