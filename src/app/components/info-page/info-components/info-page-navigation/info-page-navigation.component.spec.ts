import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageNavigationComponent } from './info-page-navigation.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('InfoPageNavigationComponent', () => {
  let component: InfoPageNavigationComponent;
  let fixture: ComponentFixture<InfoPageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
      ],
      declarations: [
        InfoPageNavigationComponent
      ],
      imports: [
        RouterTestingModule,
        SharedModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
