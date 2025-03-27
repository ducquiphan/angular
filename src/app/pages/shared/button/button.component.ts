import {Component} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
	selector: 'button[appButton]', // this is how to create Attribute selector
	imports: [
		NzIconDirective,
	],
	templateUrl: './button.component.html',
	styleUrl: './button.component.css',
})
export class ButtonComponent {

}
