import {DatePipe} from '@angular/common';
import {Component, input} from '@angular/core';
import {Task} from '../../../entity/task';

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
	protected readonly Date = Date;
}
