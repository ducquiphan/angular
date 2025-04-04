import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from '../auth/auth.model';
import {AuthService} from '../auth/auth.service';

@Directive({
	selector: '[appAuth]',
})
export class AuthDirective {
	userRole = input.required<Permission>({alias: 'appAuth'});
	private templateRef = inject(TemplateRef);
	private authService = inject(AuthService);
	private viewContainerRef = inject(ViewContainerRef);

	constructor() {
		effect(() => {
			if (this.authService.activePermission() === this.userRole()) {
				this.viewContainerRef.createEmbeddedView(this.templateRef);
			} else {
				this.viewContainerRef.clear();
			}
		});
	}

}
