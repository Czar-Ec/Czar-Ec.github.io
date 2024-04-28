import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { NavigationEnd, Router } from '@angular/router';
import { of } from 'rxjs';
import { ICON_CONFIG, CD_PORTFOLIO_PATH } from './app.tokens';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  const stubPortfolioPath = 'path';

  const stubSnackBar = {
    openFromComponent: () => { }
  };

  beforeEach(waitForAsync(() => {
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
        { provide: MatSnackBar, useValue: stubSnackBar },
        { provide: ICON_CONFIG, useValue: stubIconConfig },
        { provide: CD_PORTFOLIO_PATH, useValue: stubPortfolioPath }
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
