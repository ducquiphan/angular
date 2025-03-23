import {Component, signal} from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
import {User} from './model/user';
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
	// selectedUserId = signal<string>(DUMMY_USERS[0].id);
	selectedUser = signal<User | undefined>(undefined);

	// get selectedUser() {
	// 	return this.users.find(user => user.id===this.selectedUserId());
	// }

	onSelectUser(id: string) {
		console.log('Selected use with id: ' + id);
		// this.selectedUserId.set(id);
		this.selectedUser.set(this.users.find(user => user.id===id));
	}


}
