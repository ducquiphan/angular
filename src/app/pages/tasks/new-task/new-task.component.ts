import {Component, input, output} from '@angular/core';
import {NzButtonComponent} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';

@Component({
	selector: 'app-new-task',
	imports: [NzModalModule,
		NzButtonComponent],
	templateUrl: './new-task.component.html',
})
export class NewTaskComponent {
	isVisible = input<boolean>(false);
	// isVisible = this.isVisibleInput();
	isClosed = output<boolean>();

	handleOk(): void {
		console.log('Button ok clicked!');
		return this.isClosed.emit(false);
	}

	handleCancel(): void {
		console.log('Button cancel clicked!');
		return this.isClosed.emit(false);
	}
}
