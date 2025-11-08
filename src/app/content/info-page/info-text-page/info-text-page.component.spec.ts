import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTextPageComponent } from './info-text-page.component';

describe('InfoTextPageComponent', () => {
  let component: InfoTextPageComponent;

  let screenServiceStub = {
    isMobile$:  null,
  };

  beforeEach(async () => {
    component = new InfoTextPageComponent(screenServiceStub as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
