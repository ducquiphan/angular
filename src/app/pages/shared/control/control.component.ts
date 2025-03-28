import {Component, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';
import {NzFormControlComponent, NzFormItemComponent, NzFormLabelComponent} from 'ng-zorro-antd/form';
import {NzColDirective, NzRowDirective} from 'ng-zorro-antd/grid';

@Component({
	selector: 'app-control',
	imports: [
		NzColDirective,
		NzFormControlComponent,
		NzFormItemComponent,
		NzFormLabelComponent,
		NzRowDirective,
	],
	templateUrl: './control.component.html',
	styleUrl: './control.component.css',
	encapsulation: ViewEncapsulation.None,
	host: {
		class: 'control',
		'(click)': 'onClick()',
	}, // This is the preferred way of host binding and listening
})
export class ControlComponent {
	label = input.required<{ for: string, name: string }>();
	// @HostBinding('class') className = 'control';
	// @HostListener('click')
	private el = inject(ElementRef);

	onClick() {
		console.log('Clicked!');
		console.log(this.el);
	}


}
