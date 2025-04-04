import {Directive} from '@angular/core';

@Directive({
	selector: 'a[appSafeLink]',
	host: {
		'(click)': 'onConfirmLeavePage($event)',
	},

})
export class SafeLinkDirective {

	constructor() {
		console.log('SafeLink directive is active!');
	}

	onConfirmLeavePage(event: MouseEvent) {
		const isLeaving = window.confirm('Do you want to leave this page?');
		if (isLeaving) {
			return;
		} else {
			event.preventDefault();
		}
	}
}
