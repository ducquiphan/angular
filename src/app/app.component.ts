import {Component} from '@angular/core';
import {HeaderComponent} from './pages/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular18-course-pj';
}
