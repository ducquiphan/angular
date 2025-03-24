import {Component, output} from '@angular/core';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';

@Component({
	selector: 'app-new-task',
	imports: [
		NzFormModule,
		NzInputDirective,
		NzTextareaCountComponent,
	],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
	cancel = output<void>();

	onCancel() {
		this.cancel.emit();
	}

	onCreate() {

	}
}
