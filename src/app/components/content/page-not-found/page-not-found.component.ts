import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  // base url of image to display
  public randAssets;

  // the chosen random image
  public randImg;

  // random phrase to show
  public randPhrase;

  constructor(
    private http: HttpClient
  ) {
    // can read this from config later
    this.randAssets = 'assets/';
    const assetsUrl = this.randAssets + '404phrases.json';

    // choose a random phrase
    this.http.get(assetsUrl)
      .subscribe((res: any) => {
        // make sure there are phrases
        if (!res.assets || (res.assets.length < 1)) {
          return;
        }

        // get a random value
        const randNum = Math.floor(Math.random() * res.assets.length);

        // set the image and phrase to show
        this.randImg = res.assets[randNum].img;
        this.randPhrase = res.assets[randNum].phrase;
      });
  }

  ngOnInit() {
  }

}
