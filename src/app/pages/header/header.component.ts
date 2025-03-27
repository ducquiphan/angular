import {Component} from '@angular/core';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {ButtonComponent} from '../shared/button/button.component';

@Component({
	selector: 'app-header',
	imports: [
		ButtonComponent,
		NzIconDirective,
	],
	templateUrl: './header.component.html',
	styleUrl: './header.component.css',
})
export class HeaderComponent {

}
