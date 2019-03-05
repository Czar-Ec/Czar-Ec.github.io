import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpContentComponent } from './work-exp-content.component';

describe('WorkExpContentComponent', () => {
  let component: WorkExpContentComponent;
  let fixture: ComponentFixture<WorkExpContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
