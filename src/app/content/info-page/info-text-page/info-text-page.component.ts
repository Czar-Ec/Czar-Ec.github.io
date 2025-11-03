import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InfoPanelNavigationComponent } from '../info-panel-navigation/info-panel-navigation.component';
import { Observable } from 'rxjs';
import { ScreenService } from '../../../shared/screen.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-text-page',
  imports: [
    AsyncPipe,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    InfoPanelNavigationComponent
  ],
  templateUrl: './info-text-page.component.html',
  styleUrl: './info-text-page.component.scss',
})
export class InfoTextPageComponent {
  public isMobile$: Observable<boolean> | null = null;

  constructor(private screenService: ScreenService) {
    this.isMobile$ = this.screenService.isMobile$;
  }
}
