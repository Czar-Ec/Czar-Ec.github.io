import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public openCV() {
    window.open('assets/docs/CzarEchavezCV.pdf', '_blank');
  }

  public openLinkedIn() {
    window.open('https://www.linkedin.com/in/czarec', '_blank');
  }

  public openGithub() {
    window.open('https://github.com/Czar-Ec/', '_blank');
  }
}
