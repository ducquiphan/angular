import {DatePipe} from '@angular/common';
import {Component, input, output} from '@angular/core';
import {Task} from '../../../models/task';

@Component({
	selector: 'app-task',
	imports: [
		DatePipe,
	],
	templateUrl: './task.component.html',
	styleUrl: './task.component.css',
})
export class TaskComponent {
	task = input.required<Task>();
	completeTask = output<string>();

	onCompleteTask() {
		return this.completeTask.emit(this.task().id ? <string>this.task().id: '');
	}
}
