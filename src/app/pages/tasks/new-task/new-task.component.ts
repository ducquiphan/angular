import {Component, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';
import {type Task} from '../../../models/task';

@Component({
	selector: 'app-new-task',
	imports: [
		NzFormModule,
		NzInputDirective,
		NzTextareaCountComponent,
		FormsModule,
	],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
	cancel = output<void>();
	add = output<Task>();
	title = model(''); // we should use model instead of signal
	summary = '';
	date = '';

	onCancel() {
		this.cancel.emit();
	}

	onSubmit() {
		this.add.emit({
			title: this.title(),
			summary: this.summary,
			dueDate: this.date,
		});
		console.log('I executed:' + new Date().getTime().toString());
	}
}
