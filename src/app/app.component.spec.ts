import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { ICON_CONFIG } from './app.tokens';

describe('AppComponent', () => {
  let component: AppComponent;

  const stubThemeService = {
    init: () => { },
    applyParticles: () => { }
  };

  const stubRouter = {
    events: of(new NavigationEnd(0, '/info/', '/info/')),
    navigate: () => null
  };

  const stubIconConfig = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatIconModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        OverlayContainer,
        { provide: ThemeService, useValue: stubThemeService },
        { provide: Router, useValue: stubRouter },
        { provide: ICON_CONFIG, useValue: stubIconConfig }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'CzarEc Portfolio'`, () => {
    expect(component.title).toEqual('CzarEc Portfolio');
  });

  describe('METHOD: OnWindowResize', () => {
    it('should reapply particles JS on window resize', () => {
      const applyTheme = spyOn(component.theme, 'applyParticles');
      component.OnWindowResize();
      expect(applyTheme).toHaveBeenCalled();
    });
  });

  describe('METHOD: ngOnInit', () => {
    it('should scroll to the info page if the url has info', () => {
      component.ngAfterViewInit();
    });
  });
});
