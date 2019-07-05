/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* App Module */
import { SharedModule } from '../shared/shared.module';

/* Components */
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    NavBarComponent
  ],
})
export class CoreModule { }
