import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoComponent } from './logo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  const stub = { add: '' };
  const addStub = { add: () => stub };

  const stubAnime = {
    default: {
      timeline: () => addStub
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
      (window as any).anime = stubAnime;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: waitForLogo', () => {
    it('should animate the logo', () => {
      const el = document.createElement('div');
      const svg1 = document. createElementNS('http://www.w3.org/2000/svg', 'svg');
      const svgPath = document. createElementNS('http://www.w3.org/2000/svg', 'path');
      svgPath.setAttributeNS(null, 'd', '');
      svg1.appendChild(svgPath);
      el.appendChild(svg1);
      el.className = 'logo-svg';
      document.body.appendChild(el);
      component['waitForLogo']();
    });
  });
});
