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
  @ViewChild('toggleButton') toggleButton: ElementRef;

  isNavbarCollapsed = true;
  sidebarVisible: boolean;
  body: HTMLElement;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    const navbar: HTMLElement = this.navbar.nativeElement;
    this.body = this.renderer.selectRootElement('body', true);

    this.renderer.listen('window', 'scroll', () => {
      const number = window.scrollY;
      if (number > 150 || window.pageYOffset > 150) {
        navbar.classList.remove('navbar-transparent');
      } else {
        navbar.classList.add('navbar-transparent');
      }
    });
  }


  sidebarOpen() {
    this.body.classList.add('nav-open');
    this.toggleButton.nativeElement.classList.add('toggled');
    this.sidebarVisible = true;
  }

  sidebarClose() {
    this.toggleButton.nativeElement.classList.remove('toggled');
    this.sidebarVisible = false;
    this.body.classList.remove('nav-open');
  }

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }

    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }


}
