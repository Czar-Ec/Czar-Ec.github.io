import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('App', () => {
  let fixture: any; // will hold ComponentFixture<App>
  let app: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClientTesting(),
        provideHttpClient(),
      ],
    }).compileComponents(); // ✅ compileComponents does NOT return fixture

    // Create fixture AFTER compilation
    fixture = TestBed.createComponent(App);
    app = fixture.componentInstance;

    // Run initial change detection
    fixture.detectChanges();

    // Wait for async tasks (async pipes, observables) to complete
    await fixture.whenStable();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
