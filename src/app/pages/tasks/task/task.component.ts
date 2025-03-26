import {DatePipe} from '@angular/common';
import {Component, inject, input, output} from '@angular/core';
import {Task} from '../../../models/task';
import {TaskService} from '../../../services/task.service';
import {CardComponent} from '../../shared/card/card.component';

@Component({
	selector: 'app-task',
	imports: [
		DatePipe,
		CardComponent,
	],
	templateUrl: './task.component.html',
	styleUrl: './task.component.css',
})
export class TaskComponent {
	task = input.required<Task>();
	completeTask = output<string>();
	private _taskService = inject(TaskService);

	onCompleteTask() {
		return this._taskService.removeTask(this.task().id ? <string>this.task().id: '');
	}
}
