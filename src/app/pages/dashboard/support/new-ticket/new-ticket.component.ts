import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
	@ViewChild('form') formEl?: ElementRef<HTMLFormElement>;

	// private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

	onSubmit(title: string, request: string) {
		console.log('Submitted!');
		console.log(title);
		console.log(request);
		this.formEl?.nativeElement.reset();
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
