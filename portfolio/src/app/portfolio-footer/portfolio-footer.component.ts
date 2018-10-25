import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  templateUrl: './portfolio-footer.component.html',
  styleUrls: ['./portfolio-footer.component.scss']
})
export class PortfolioFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToLegacySite() {
    window.open('/assets/archive/index.html', '_self');
  }

  public goToEnvitia() {
    window.open('https://www.envitia.com/', '_blank');
  }

}
