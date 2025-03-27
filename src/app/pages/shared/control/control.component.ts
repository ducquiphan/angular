import {Component, input} from '@angular/core';
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
})
export class ControlComponent {
	label = input.required<{ for: string, name: string }>();
}
