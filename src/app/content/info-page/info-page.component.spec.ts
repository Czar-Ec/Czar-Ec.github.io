import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageComponent } from './info-page.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;

  let screenServiceStub = {
    isMobile$:  null,
  };

  beforeEach(async () => {
    component = new InfoPageComponent(screenServiceStub as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
