/* Angular modules */
import {Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    isNavbarCollapsed = true;
    scrolled = false;

    constructor() { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.scrolled = number > 50;
    }

}
