import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoPageComponent } from './info-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExternalLinkService } from '../../services/external-link.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ICON_CONFIG } from 'src/app/app.tokens';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;
  let fixture: ComponentFixture<InfoPageComponent>;

  const stubExternalLinkService = {
    openLink: () => { }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatMenuModule,
        RouterTestingModule
      ],
      declarations: [InfoPageComponent],
      providers: [
        { provide: ExternalLinkService, useValue: stubExternalLinkService },
        { provide: ICON_CONFIG, useValue: [] }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
