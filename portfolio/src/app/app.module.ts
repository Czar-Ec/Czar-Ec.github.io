import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatButtonModule, MatIconModule, MatTabsModule, MatInputModule } from '@angular/material';
import { PortfolioHeaderComponent } from './portfolio-header/portfolio-header.component';
import { ContentIntroComponent } from './portfolio-content/content-intro/content-intro.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { ContentWorkExperienceComponent } from './portfolio-content/content-work-experience/content-work-experience.component';
import { ContentEducationComponent } from './portfolio-content/content-education/content-education.component';
import { ContentExtraSkillsComponent } from './portfolio-content/content-extra-skills/content-extra-skills.component';
import { ContentContactComponent } from './portfolio-content/content-contact/content-contact.component';
import { PortfolioFooterComponent } from './portfolio-footer/portfolio-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioHeaderComponent,
    ContentIntroComponent,
    ContentWorkExperienceComponent,
    ContentEducationComponent,
    ContentExtraSkillsComponent,
    ContentContactComponent,
    PortfolioFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MaterialModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
