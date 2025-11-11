import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoToolsList } from './info-tools-list.component';

describe('InfoToolsList', () => {
  let component: InfoToolsList;
  let fixture: ComponentFixture<InfoToolsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoToolsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoToolsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
