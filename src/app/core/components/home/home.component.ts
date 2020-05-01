/* Angular modules */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';

/* Lottie */
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  onScroll = false;
  anim: any;
  breakpoint: number;
  options1: AnimationOptions = {
    path: '../../../../assets/lottie/19566-animated-e-mail-signatures.json',
  };
  options2: AnimationOptions = {
    path: '../../../../assets/lottie/12546-welcome.json',
  };
  options3: AnimationOptions = {
    path: '../../../../assets/lottie/14288-surfing-waveboard.json',
  };
  options4: AnimationOptions = {
    path: '../../../../assets/lottie/19565-animated-e-mail-signatures.json',
  };
  options5: AnimationOptions = {
    path: '../../../../assets/lottie/14323-owai-animation.json',
  };

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  scroll = (event: any): void => {
    this.onScroll = !event.isReachingTop;
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }

  handleClick(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
}

  handleAnimation(anim: any) {
    this.anim = anim;
    setTimeout(() => {
      this.anim.pause();
    }, 4000);
  }

  showModal(type: string): void {
    document.getElementById(type).style.display = 'block';
  }

  closeModal(type: string): void {
    document.getElementById(type).style.display = 'none';
  }

}
