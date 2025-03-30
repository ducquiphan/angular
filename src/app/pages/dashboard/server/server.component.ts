import {AfterViewInit, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';

@Component({
	selector: 'app-server',
	imports: [],
	templateUrl: './server.component.html',
	styleUrl: './server.component.css',
})
export class ServerComponent implements OnInit, AfterViewInit {
	currentStatus = signal<'offline' | 'online' | 'unknown'>('online');

	// private interval?: ReturnType<typeof setInterval>;
	private destroyRef = inject(DestroyRef);

	constructor() {
		// effect(() => {
		// 	console.log(this.currentStatus());
		// });

	}

	ngOnInit(): void {
		console.log('ngOnInit');
		// this.interval =
		const interval = setInterval(() => {
			const rand = Math.random(); // 0=< rand <1
			if (rand < 0.5) {
				this.currentStatus.set('offline');
			} else if (rand < 0.9) {
				this.currentStatus.set('online');
			} else {
				this.currentStatus.set('unknown');
			}
		}, 5000);
		this.destroyRef.onDestroy(() => {
			clearInterval(interval);
		});
	}

	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}

	// ngOnDestroy(): void {
	// 	clearTimeout(this.interval);
	// }


}
