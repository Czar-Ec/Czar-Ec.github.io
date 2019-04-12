import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatIconModule
      ],
      declarations: [PageNotFoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return if no responses are received', () => {
    spyOn<any>(component['http'], 'get').and.returnValue(of({ assets: [] }));

    component['randomPhrase']();
    expect(component.randImg).toBeUndefined();
    expect(component.randPhrase).toBeUndefined();
  });

  describe('METHOD: randomPhrase', () => {
    it('should choose a random value for display', () => {
      spyOn<any>(component['http'], 'get').and.returnValue(
        of({ assets: [{ img: 'img', phrase: 'Working at sad boi hours' }] })
      );

      component['randomPhrase']();
      expect(component.randImg).toBe('img');
      expect(component.randPhrase).toBe('Working at sad boi hours');
    });
  });
});
