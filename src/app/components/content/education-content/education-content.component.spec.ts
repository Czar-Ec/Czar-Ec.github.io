import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationContentComponent } from './education-content.component';
import { MatExpansionModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EducationContentComponent', () => {
  let component: EducationContentComponent;
  let fixture: ComponentFixture<EducationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatExpansionModule,
        MatTableModule
      ],
      declarations: [EducationContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: filter', () => {
    it('should set the filter correctly', () => {
      component.filter('filter string');
      expect(component.qualList.filter).toBe('filter string');
    });
  });

  describe('METHOD: openProject', () => {
    it('should open the correctl url', () => {
      const spy = spyOn(window, 'open');
      component.openProject('project your mom gay');
      expect(spy).toHaveBeenCalledWith('project your mom gay', '_blank');
    });
  });
});
