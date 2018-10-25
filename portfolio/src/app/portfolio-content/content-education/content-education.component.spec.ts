import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEducationComponent } from './content-education.component';

describe('ContentEducationComponent', () => {
  let component: ContentEducationComponent;
  let fixture: ComponentFixture<ContentEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
