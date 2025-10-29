import { Component } from '@angular/core';
import { ScreenService } from '../shared/screen.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    AsyncPipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  public isMobile$: Observable<boolean> | null = null

  constructor(
    private screenService: ScreenService
  ) { 
    this.isMobile$ = this.screenService.isMobile$;
  }
}
