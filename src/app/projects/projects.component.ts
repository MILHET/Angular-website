/* Angular modules */
import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

import Projects from './projectsConf.json';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projectsList: any = Projects;

    constructor(private animateScrollService: NgAnimateScrollService) { }

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
