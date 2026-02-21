import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs';
import { InfoToolsService } from '../info-tools.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info-tools-filter',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './info-tools-filter.component.html',
  styleUrl: './info-tools-filter.component.scss',
})
export class InfoToolsFilter {
  public filterFormGroup: FormGroup;

  constructor(private readonly infoToolsService: InfoToolsService) {
    this.filterFormGroup = new FormGroup({
      filterStr: new FormControl(''),
    });

    this._filterListener();
  }

  /**
   * Clears the filter input field.
   */
  public clearFilter() {
    this.filterFormGroup.get('filterStr')?.setValue('');
  }

  /**
   * Listens to filter string changes and then updates the tool list accordingly.
   */
  private _filterListener() {
    this.filterFormGroup
      .get('filterStr')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        this.infoToolsService.applyFilters(value);
      });
  }
}
