import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule } from '@angular/material';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { PortfolioContentComponent } from './portfolio-content/portfolio-content.component';
import { ContentIntroComponent } from './portfolio-content/content-intro/content-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    PortfolioContentComponent,
    ContentIntroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
