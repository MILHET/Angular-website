/* Angular modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

/* App modules */
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

/* Material Angular */
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/* Components */
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        ProfileComponent,
        ProjectsComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        SharedModule,
        FormsModule,
        MDBBootstrapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
