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

    constructor(private animateScrollService: NgAnimateScrollService) { }

    handleClick() {
        this.animateScrollService.scrollToElement('about', 800);
    }
}
