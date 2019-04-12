import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { MatMenuModule, MatIconModule, MatSlideToggleModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatMenuModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatToolbarModule
      ],
      declarations: [ToolbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listen to router events', () => {
    component.routeLinks = [{
      label: 'Introduction',
      link: './',
      index: 0
    }];
    component['router'].navigate([]);
    expect(component.activeLinkIndex).toBe(0);
  });

  describe('METHOD: toggleAppTheme', () => {
    it('should emit the current state of the theme', () => {
      const spy = spyOn(component.toggleTheme, 'emit');
      component.toggleAppTheme();
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('METHOD: openCV', () => {
    it('should open the CV file', () => {
      const spy = spyOn(window, 'open');
      component.openCV();
      expect(spy).toHaveBeenCalledWith('assets/docs/CzarEchavezCV.pdf', '_blank');
    });
  });

  describe('METHOD: openLinkedIn', () => {
    it('should open the LinkedIn page', () => {
      const spy = spyOn(window, 'open');
      component.openLinkedIn();
      expect(spy).toHaveBeenCalledWith('https://www.linkedin.com/in/czarec', '_blank');
    });
  });

  describe('METHOD: openGithub', () => {
    it('should open the Github page', () => {
      const spy = spyOn(window, 'open');
      component.openGithub();
      expect(spy).toHaveBeenCalledWith('https://github.com/Czar-Ec/', '_blank');
    });
  });
});
