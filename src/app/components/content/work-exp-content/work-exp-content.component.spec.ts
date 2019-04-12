import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpContentComponent } from './work-exp-content.component';

describe('WorkExpContentComponent', () => {
  let component: WorkExpContentComponent;
  let fixture: ComponentFixture<WorkExpContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExpContentComponent]
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

  describe('METHOD: openLink', () => {
    it('should open the correct link', () => {
      const spy = spyOn(window, 'open');
      component.openLink('idiot sandwich');
      expect(spy).toHaveBeenCalledWith('idiot sandwich', '_blank');
    });

    it('should do nothing if no link given', () => {
      const spy = spyOn(window, 'open');
      component.openLink('');
      expect(spy).not.toHaveBeenCalled();
    });
  });
});
