import {Directive, effect, inject, input} from '@angular/core';
import {Permission} from '../auth/auth.model';
import {AuthService} from '../auth/auth.service';

@Directive({
	selector: '[appAuth]',
})
export class AuthDirective {
	userRole = input.required<Permission>({alias: 'appAuth'});
	private authService = inject(AuthService);

	constructor() {
		effect(() => {
			if (this.authService.activePermission() === this.userRole()) {
				console.log('User permission allow!');
			} else {
				console.log('User permission denied!');
			}
		});
	}

}
