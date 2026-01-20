import {Signal, signal} from '@angular/core';
import {Task, TaskStatus} from './task.model';

// @Injectable({
//   providedIn: 'root'
// })
export class TasksService {
  constructor() {
  }

  private _tasks = signal<Task[]>([]);

  get tasks(): Signal<Task[]> {
    return this._tasks.asReadonly();
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

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this._tasks.update((oldTasks) => oldTasks
      .map((task) => task.id === taskId ? {...task, status: newStatus} : task));
  }
}
