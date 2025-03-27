import {Component} from '@angular/core';
import {DashboardItemComponent} from './pages/dashboard/dashboard-item/dashboard-item.component';
import {ServerComponent} from './pages/dashboard/server/server.component';
import {SupportComponent} from './pages/dashboard/support/support.component';
import {TrafficComponent} from './pages/dashboard/traffic/traffic.component';
import {HeaderComponent} from './pages/header/header.component';

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [
		SupportComponent,
		HeaderComponent,
		ServerComponent,
		TrafficComponent,
		DashboardItemComponent,
	],
})
export class AppComponent {

}
