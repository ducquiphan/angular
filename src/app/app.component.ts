import {Component} from '@angular/core';
import {DUMMY_USERS} from './dummy-users';
import {HeaderComponent} from './pages/header/header.component';
import {UserComponent} from './pages/user/user.component';

@Component({
	selector: 'app-root',
	imports: [HeaderComponent, UserComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'angular18-course-pj';
	users = DUMMY_USERS;

	onSelectUser(id: string) {
		console.log('Selected use with id: ' + id);
	}
}
