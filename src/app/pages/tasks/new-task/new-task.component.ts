import {Component, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputDirective, NzTextareaCountComponent} from 'ng-zorro-antd/input';

@Component({
	selector: 'app-new-task',
	imports: [
		NzFormModule,
		NzInputDirective,
		NzTextareaCountComponent,
		FormsModule,
	],
	templateUrl: './new-task.component.html',
	styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
	cancel = output<void>();
	title = model(''); // we should use model instead of signal
	summary = '';
	date = '';

	onCancel() {
		this.cancel.emit();
	}

	onCreate() {

	}
}
