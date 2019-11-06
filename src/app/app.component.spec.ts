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

describe('AppComponent', () => {
  let component: AppComponent;

  const stubThemeService = {
    init: () => { },
    applyParticles: () => { }
  };

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
        { provide: ThemeService, useValue: stubThemeService }
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
});
