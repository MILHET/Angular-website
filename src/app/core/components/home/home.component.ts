/* Angular modules */
import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

import News from './newsConf.json';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    newsList: any = News;
    show1 = false;
    show2 = false;
    show3 = false;
    show4 = false;

    constructor(private animateScrollService: NgAnimateScrollService) { }

    handleClick() {
        this.animateScrollService.scrollToElement('about', 800);
    }
}
