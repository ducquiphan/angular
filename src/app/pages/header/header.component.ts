import {NgOptimizedImage} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [
        NgOptimizedImage,
    ],
    //standalone: true, // If using Angular 19 or higher, this is set to true by default
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {

}
