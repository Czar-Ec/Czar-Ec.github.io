import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterModule } from '@angular/router';
import { ScreenService } from '../../shared/screen.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-info-page',
  imports: [AsyncPipe, RouterModule, RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './info-page.component.html',
  styleUrl: './info-page.component.scss',
})
export class InfoPageComponent {
  public isMobile$: Observable<boolean> | null = null;

  constructor(private screenService: ScreenService) {
    this.isMobile$ = this.screenService.isMobile$;
  }
}
