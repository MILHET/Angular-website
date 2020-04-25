/* Angular modules */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  onActivate(event) {
    document.querySelector('mat-sidenav-content').scrollTop = 0;
  }
}
