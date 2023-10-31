import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnderConstructionWarningSnackBarComponent } from './under-construction-warning-snack-bar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnderConstructionWarningService } from '../under-construction-warning.service';
import { ExternalLinkService } from '../../external-link.service';

describe('UnderConstructionWarningSnackBarComponent', () => {
  let component: UnderConstructionWarningSnackBarComponent;
  let fixture: ComponentFixture<UnderConstructionWarningSnackBarComponent>;

  const stubService = {
    dismissSnackbar: () => { }
  };

  const stubExternalService = {
    openBugReportPage: () => { }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionWarningSnackBarComponent ],
      imports: [

      ],
      providers: [
        { provide: UnderConstructionWarningService, useValue: stubService },
        { provide: ExternalLinkService, useValue: stubExternalService },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderConstructionWarningSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
