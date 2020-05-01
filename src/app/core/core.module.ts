/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* App modules */
import { SharedModule } from '../shared/shared.module';

/* Components */
import { HomeComponent } from './components/home/home.component';
import { SidenavListComponent } from './components/home/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavListComponent,
    FooterComponent
  ],
  exports: [
    SidenavListComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
