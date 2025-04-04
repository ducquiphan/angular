import {Directive, ElementRef, inject, input} from '@angular/core';

@Directive({
	selector: 'a[appSafeLink]',
	host: {
		'(click)': 'onConfirmLeavePage($event)',
	},

})
export class SafeLinkDirective {
	queryParam = input('myapp', {alias: 'appSafeLink'});
	private hostElRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

	constructor() {
		console.log('SafeLink directive is active!');
	}

	onConfirmLeavePage(event: MouseEvent) {
		const isLeaving = window.confirm('Do you want to leave this page?');
		if (isLeaving) {
			const address = this.hostElRef.nativeElement.href;
			this.hostElRef.nativeElement.href = address + '?from=' + this.queryParam();
			return;
		} else {
			event.preventDefault();
		}
	}

}
