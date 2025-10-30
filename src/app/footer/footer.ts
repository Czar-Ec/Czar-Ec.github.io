import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ScreenService } from '../shared/screen.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-footer',
  imports: [
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
  ],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {

  public isMobile$: Observable<boolean> | null = null

  constructor(
    private screenService: ScreenService
  ) { 
    this.isMobile$ = this.screenService.isMobile$;
  }
}
