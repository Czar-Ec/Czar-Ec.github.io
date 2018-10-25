import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWorkExperienceComponent } from './content-work-experience.component';

describe('ContentWorkExperienceComponent', () => {
  let component: ContentWorkExperienceComponent;
  let fixture: ComponentFixture<ContentWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
