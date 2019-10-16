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

describe('AppComponent', () => {
  let component: AppComponent;

  const cList = {
    add: () => { },
    remove: () => { }
  };

  const stubOverlay = {
    classList: cList
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
        OverlayContainer
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

  describe('METHOD: toggleDarkTheme', () => {
    it('should toggle the dark theme', () => {
      component.setDarkTheme = true;
      component.toggleDarkTheme();
      expect(component.setDarkTheme).toBeFalsy();
    });

    it('should call applyTheme', () => {
      const spy = spyOn<any>(component, 'applyTheme');
      component.toggleDarkTheme();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('METHOD: applyTheme', () => {
    it('should add the dark theme if setDarkTheme is true', () => {
      component.setDarkTheme = true;
      component['overlay'] = stubOverlay;
      const spy = spyOn<any>(component['overlay'].classList, 'add');

      component['applyTheme']();
      expect(spy).toHaveBeenCalled();
    });

    it('should remove the dark theme if setDarkTheme is false', () => {
      component.setDarkTheme = false;
      component['overlay'] = stubOverlay;
      const spy = spyOn<any>(component['overlay'].classList, 'remove');

      component['applyTheme']();
      expect(spy).toHaveBeenCalled();
    });
  });
});
