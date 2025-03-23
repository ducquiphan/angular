import {Component, computed, input, output} from '@angular/core';
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
	id = input.required<string>();
	imagePath = computed(() => {
		return 'users/' + this.avatar();
	});
	// @Output() selectUser = new EventEmitter();
	selectUser = output<string>(); // Use this whenever you like, this code just to use when there is no decorator in the component, also this is
	// shorter


	// get imagePath() {
	// 	return 'users/' + this.avatar;
	// }

	onSelectUser() {
		return this.selectUser.emit(this.id());
	}
}
