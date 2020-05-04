import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderConstructionWarningSnackBarComponent } from './under-construction-warning-snack-bar.component';

describe('UnderConstructionWarningSnackBarComponent', () => {
  let component: UnderConstructionWarningSnackBarComponent;
  let fixture: ComponentFixture<UnderConstructionWarningSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderConstructionWarningSnackBarComponent ]
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
