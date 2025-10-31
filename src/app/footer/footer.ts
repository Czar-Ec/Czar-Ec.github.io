import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { ScreenService } from '../shared/screen.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-footer',
  imports: [AsyncPipe, MatIconModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  public darkMode: boolean = false;

  public isMobile$: Observable<boolean> | null = null;

  constructor(private screenService: ScreenService) {
    this.isMobile$ = this.screenService.isMobile$;
  }

  /**
   * Open CV in a new tab
   */
  public openCV(): void {
    // window.open('/assets/CV.pdf', '_blank');
  }

  /**
   * Open GitHub profile in a new tab
   */
  public openGitHub(): void {
    window.open('https://github.com/Czar-Ec', '_blank');
  }

  /**
   * Open LinkedIn profile in a new tab
   */
  public openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/czarec/', '_blank');
  }

  /**
   * Open Instagram profile in a new tab
   */
  public openInstagram(): void {
    window.open('https://www.instagram.com/czar_ec/', '_blank');
  }

  /**
   * Toggle Dark Mode
   * @param checked
   */
  public toggleDarkMode(): void {
    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.darkMode = !this.darkMode;
  }
}
