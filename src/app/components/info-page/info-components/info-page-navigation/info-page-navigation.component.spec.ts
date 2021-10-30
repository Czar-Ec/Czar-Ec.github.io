import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageNavigationComponent } from './info-page-navigation.component';
import { SharedModule } from 'src/app/modules/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ExternalLinkService } from '../../../../services/external-link.service';

describe('InfoPageNavigationComponent', () => {
  let component: InfoPageNavigationComponent;
  let fixture: ComponentFixture<InfoPageNavigationComponent>;

  const stubExternalLinkService = {
    openBugReportPage: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ExternalLinkService, useValue: stubExternalLinkService }
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
