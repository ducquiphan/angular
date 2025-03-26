import {Component, input, signal} from '@angular/core';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {fadeInOut} from '../../commons/animations/in-out-animation';
import {User} from '../../models/user';
import {TaskService} from '../../services/task.service';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskComponent} from './task/task.component';

@Component({
	selector: 'app-tasks',
	imports: [
		TaskComponent,
		NewTaskComponent,
		NzModalModule,
	],
	templateUrl: './tasks.component.html',
	styleUrl: './tasks.component.css',
	animations: [fadeInOut],
})
export class TasksComponent {
	// @Input() name?: string;
	user = input.required<User>();
	// tasks = signal<Task[]>(dummyTasks);
	isAddingTask = signal<boolean>(false);

	constructor(private _taskService: TaskService) {
	}

	get selectedUserTasks() {
		return this._taskService.getUserTasks(this.user().id);
	}

	showAddTask() {
		this.isAddingTask.set(true);
	}

	onCloseAddTask() {
		this.isAddingTask.set(false);
	}
}
