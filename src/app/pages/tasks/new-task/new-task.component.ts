import {Component, inject, input, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';
import {TaskService} from '../../../services/task.service';

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
	userId = input.required<string>();
	close = output<void>();
	title = model(''); // we should use model instead of signal
	summary = '';
	date = '';
	private _taskService = inject(TaskService);

	onCancel() {
		this.close.emit();
	}

	onSubmit() {
		this._taskService.addTask({
			title: this.title(),
			summary: this.summary,
			dueDate: this.date,
		}, this.userId());
		this.close.emit();
	}
}
