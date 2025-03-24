import {Component, input, signal} from '@angular/core';
import {Task} from '../../model/task';
import {User} from '../../model/user';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskComponent} from './task/task.component';


const dummyTasks: Task[] = [
	{
		id: 't1',
		userId: 'u1',
		title: 'Master Angular',
		summary:
				'Learn all the basic and advanced features of Angular & how to apply them.',
		dueDate: '2025-12-31',
	},
	{
		id: 't2',
		userId: 'u3',
		title: 'Build first prototype',
		summary: 'Build a first prototype of the online shop website',
		dueDate: '2024-05-31',
	},
	{
		id: 't3',
		userId: 'u3',
		title: 'Prepare issue template',
		summary:
				'Prepare and describe an issue template which will help with project management',
		dueDate: '2024-06-15',
	},
];

@Component({
	selector: 'app-tasks',
	imports: [
		TaskComponent,
		NewTaskComponent,

	],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css',
})
export class TasksComponent {
	// @Input() name?: string;
	user = input.required<User>();
	tasks = signal(dummyTasks);
	isAddingTask = signal(false);

	get selectedUserTasks() {
		return this.tasks().filter(task => task.userId === this.user().id);
	}

	onCompleteTask(id: string) {
		this.tasks.set(this.tasks().filter(task => task.id !== id));
	}

	onAddTask() {
		this.isAddingTask.set(!this.isAddingTask());
	}
}
