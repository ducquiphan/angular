import {Component, signal} from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
import {HeaderComponent} from './pages/header/header.component';
import {TasksComponent} from './pages/tasks/tasks.component';
import {UserComponent} from './pages/user/user.component';

@Component({
	selector: 'app-root',
	imports: [HeaderComponent, UserComponent, TasksComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'angular18-course-pj';
	users = DUMMY_USERS;
	selectedUser = signal(DUMMY_USERS[0]);

	onSelectUser(id: string) {
		console.log('Selected use with id: ' + id);
		this.selectedUser.set(this.users.find(user => user.id===id)!);
	}


}
