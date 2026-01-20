import {Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor() {
  }

  private _tasks = signal<Task[]>([]);

  get tasks(): Signal<Task[]> {
    return this._tasks.asReadonly();
  }

  set tasks(value: WritableSignal<Task[]>) {
    this._tasks = value;
  }

  addTask(taskData: { title: string, description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(36),
      status: 'OPEN'
    }
    this._tasks.update((oldTasks) =>
      [...oldTasks, newTask]
    );
  }
}
