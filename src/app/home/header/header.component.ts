import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    '../home.component.css'
  ]
})
export class HeaderComponent implements OnInit {

  @ViewChild('navbar') navbar: ElementRef;
  isNavbarCollapsed = true;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    const navbar: HTMLElement = this.navbar.nativeElement;

    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });
  }

}
