import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentExtraSkillsComponent } from './content-extra-skills.component';

describe('ContentExtraSkillsComponent', () => {
  let component: ContentExtraSkillsComponent;
  let fixture: ComponentFixture<ContentExtraSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentExtraSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentExtraSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
