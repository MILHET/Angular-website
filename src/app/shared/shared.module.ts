/* Angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollEventModule } from 'ngx-scroll-event';

/* Material modules */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

/* Lottie module */
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

/* Components */
import { SocialComponent } from './components/social/social.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    ScrollEventModule,
    LottieModule.forRoot({player: playerFactory, useCache: true})
  ],
  exports: [
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    ScrollEventModule,
    LottieModule,
    SocialComponent
  ]
})
export class SharedModule { }
