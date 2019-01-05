import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private animateScrollService: NgAnimateScrollService) { }

    ngOnInit() {}

    handleClick() {
        this.animateScrollService.scrollToElement('about', 800);
    }
}
