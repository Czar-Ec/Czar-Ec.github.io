import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { NgParticlesService, NgxParticlesModule } from '@tsparticles/angular';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { Footer } from './footer/footer';
import { ConfigService } from './shared/config.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Footer, NgxParticlesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {
  public id = 'tsparticles';
  public particlesOptions: ISourceOptions | undefined;

  private matIconRegistry = inject(MatIconRegistry);

  currentRoute = signal<string>('');

  constructor(
    private readonly configService: ConfigService,
    private domSanitizer: DomSanitizer,
    private readonly ngParticlesService: NgParticlesService,
    private readonly http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {
    this.configService.loadConfig('assets/config/config.json');

    // Register SVG icons
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/instagram.svg')
    );

    // Load particles JSON from assets
    this.http.get<ISourceOptions>('assets/particles/particles.json').subscribe((options) => {
      this.particlesOptions = options;
      // Initialize tsParticles engine
      this.ngParticlesService.init(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        // Trigger change detection to update the view
        this.cdr.detectChanges();
      });
    });
  }

  /**
   * Callback when particles are loaded
   * @param container 
   */
  public particlesLoaded(container: any): void {
    // console.log('Particles container loaded:', container);
  }
}
