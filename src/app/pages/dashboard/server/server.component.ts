import {Component} from '@angular/core';

@Component({
	selector: 'app-server',
	imports: [],
	templateUrl: './server.component.html',
	styleUrl: './server.component.css',
})
export class ServerComponent {
	currentStatus: 'offline' | 'online' | 'unknown' = 'online';

	constructor() {
		setInterval(() => {
			const rand = Math.random(); // 0=< rand <1
			if (rand < 0.5) {
				this.currentStatus = 'offline';
			} else if (rand < 0.9) {
				this.currentStatus = 'online';
			} else {
				this.currentStatus = 'unknown';
			}
		}, 5000);
	}
}
