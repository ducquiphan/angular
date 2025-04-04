import {Directive, input} from '@angular/core';

@Directive({
	selector: 'a[appSafeLink]',
	host: {
		'(click)': 'onConfirmLeavePage($event)',
	},

})
export class SafeLinkDirective {
	queryParam = input('myapp', {alias: 'appSafeLink'});

	constructor() {
		console.log('SafeLink directive is active!');
	}

	onConfirmLeavePage(event: MouseEvent) {
		const isLeaving = window.confirm('Do you want to leave this page?');
		if (isLeaving) {
			const address = (event.target as HTMLAnchorElement).href;
			(event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
			return;
		} else {
			event.preventDefault();
		}
	}

}
