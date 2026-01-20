import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {TasksService} from './app/tasks/tasks.service';

bootstrapApplication(AppComponent, {
  providers: [TasksService] // bad practice as this always initial instance no mater of usage
}).catch((err) => console.error(err));
