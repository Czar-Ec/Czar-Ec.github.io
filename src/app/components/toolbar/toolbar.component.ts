import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // dark mode theme is used or not
  darkTheme = true;

  // emit dark theme toggle
  @Output() toggleTheme = new EventEmitter<any>();

  // navigation tab routelinks
  routeLinks: any[];
  // current tab index
  activeLinkIndex = 0;

  constructor(private router: Router) {
    this.routeLinks = [
      {
        label: 'Introduction',
        link: '/home',
        index: 0
      }, {
        label: 'Experience',
        link: '/work-exp',
        index: 1
      }, {
        label: 'Education',
        link: '/edu',
        index: 2
      }, {
        label: 'Extra Skills',
        link: '/extra',
        index: 3
      }, {
        label: 'Contact',
        link: 'contact',
        index: 4
      }
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex =
        this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  /**
   * toggles between dark theme and light theme
   */
  toggleAppTheme() {
    this.toggleTheme.emit(this.darkTheme);
  }

  /**
   * opens the CV in another tab
   */
  public openCV() {
    window.open('assets/docs/CzarEchavezCV.pdf', '_blank');
  }

  /**
   * opens my linkedin page in another tab
   */
  public openLinkedIn() {
    window.open('https://www.linkedin.com/in/czarec', '_blank');
  }

  /**
   * opens my github page in another tab
   */
  public openGithub() {
    window.open('https://github.com/Czar-Ec/', '_blank');
  }
}
