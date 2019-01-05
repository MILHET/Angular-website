import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    constructor(private animateScrollService: NgAnimateScrollService) { }

    ngOnInit() {}

    ShowModal(modal) {
        document.getElementById(modal).style.display = 'block';
    }

    CloseModal(modal) {
        document.getElementById(modal).style.display = 'none';
    }

    handleClick() {
        this.animateScrollService.scrollToElement('down', 800);
    }

}
