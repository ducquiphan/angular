import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
	selector: '[appLog]',
	host: {
		'(click)': 'onLog()',
	},
})
export class LogDirective {
	private elRef = inject(ElementRef);

	constructor() {
	}

	onLog() {
		console.log('Clicked');
		console.log(this.elRef.nativeElement);
	}

}
