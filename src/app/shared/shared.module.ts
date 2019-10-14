/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/* NgBootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* Material Angular */
import { MDBBootstrapModule } from 'angular-bootstrap-md';

/* Components */
import { CarouselComponent } from './components/carousel/carousel.component';
import { SocialComponent } from './components/social/social.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
    declarations: [
        CarouselComponent,
        SocialComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule,
        ReactiveFormsModule,
        MDBBootstrapModule.forRoot()
    ],
    exports: [
        CarouselComponent,
        SocialComponent,
        NgbModule,
        RouterModule,
        ReactiveFormsModule,
        MDBBootstrapModule
    ]
})
export class SharedModule { }
