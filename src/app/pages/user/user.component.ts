import {Component, computed, input} from '@angular/core';
import {DUMMY_USERS} from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
	selector: 'app-user',
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
})
export class UserComponent {
	// @Input({required: true}) avatar!: string;
	// @Input({required: true}) name!: string;
	avatar = input.required<string>(); // Telling Angular that this is required. Required value cannot be set an initial value
	name = input<string>('');
	imagePath = computed(() => {
		return 'users/' + this.avatar();
	});


	// get imagePath() {
	// 	return 'users/' + this.avatar;
	// }

	onSelectUser() {

	}
}
