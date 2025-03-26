import {Injectable} from '@angular/core';
import type {Task} from '../models/task';

@Injectable({
	providedIn: 'root',
})
export class TaskService {
	constructor() {
	}

	private _dummyTasks: Task[] = [
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

	get dummyTasks(): Task[] {
		return this._dummyTasks;
	}

	set dummyTasks(value: Task[]) {
		this._dummyTasks = value;
	}

	getUserTasks(userId: string) {
		return this._dummyTasks.filter(task => task.userId === userId);
	}

	addTask(newTask: Task, userId: string) {
		newTask.id = new Date().getTime().toString();
		newTask.userId = userId;
		// this.tasks.update(currentTasks => [...currentTasks, newTask]);
		this._dummyTasks.push(newTask);
	}

	removeTask(taskId: string) {
		// this.tasks.set(this.tasks().filter(task => task.id !== id));
		this._dummyTasks = this._dummyTasks.filter(task => task.id !== taskId);
	}
}
