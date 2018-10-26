import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContactComponent } from './content-contact.component';

describe('ContentExtraContactComponent', () => {
  let component: ContentContactComponent;
  let fixture: ComponentFixture<ContentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
