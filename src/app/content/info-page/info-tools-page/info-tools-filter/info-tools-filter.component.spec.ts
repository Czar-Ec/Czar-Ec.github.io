import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoToolsFilter } from './info-tools-filter.component';
import { InfoToolsService } from '../info-tools.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';

describe('InfoToolsFilter', () => {
  let component: InfoToolsFilter;
  let fixture: ComponentFixture<InfoToolsFilter>;
  let infoToolsServiceSpy: jasmine.SpyObj<InfoToolsService>;

  beforeEach(async () => {
    // Create a spy object for InfoToolsService
    infoToolsServiceSpy = jasmine.createSpyObj('InfoToolsService', ['applyFilters']);

    await TestBed.configureTestingModule({
      imports: [
        InfoToolsFilter, // Standalone component
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
      ],
      providers: [
        { provide: InfoToolsService, useValue: infoToolsServiceSpy }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoToolsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clearFilter', () => {
    it('should reset the filter control to an empty string', () => {
      component.filterFormGroup.get('filterStr')?.setValue('test');
      component.clearFilter();
      expect(component.filterFormGroup.get('filterStr')?.value).toBe('');
    });
  });

  describe('_filterListener', () => {
    it('should call applyFilters when the filter value changes', fakeAsync(() => {
      const inputControl = component.filterFormGroup.get('filterStr');
      inputControl?.setValue('new value');
      tick(500); // Wait for debounceTime
      expect(infoToolsServiceSpy.applyFilters).toHaveBeenCalledWith('new value');

      // Test another value change
      inputControl?.setValue('another value');
      tick(500);
      expect(infoToolsServiceSpy.applyFilters).toHaveBeenCalledWith('another value');
      expect(infoToolsServiceSpy.applyFilters).toHaveBeenCalledTimes(2);
    }));
  });
});
