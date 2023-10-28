import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToolsPageComponent } from './tools-page.component';
import { CONFIDENCE_RATING_CONFIG } from '../../../../app.tokens';
import { ToolsInfoService } from './tools-info-service/tools-info.service';
import { ExternalLinkService } from 'src/app/services/external-link.service';

describe('ToolsPageComponent', () => {
  let component: ToolsPageComponent;
  let fixture: ComponentFixture<ToolsPageComponent>;

  const stubConfidenceRatingConfig = {
    starsToDisplay: 5
  };

  const stubToolsInfoService = {
    filterList: () => { },
    retrieveFavIconUrl: () => { }
  };

  const stubExternalLinkService = {
    openLink: () => { }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsPageComponent],
      providers: [
        { provide: ToolsInfoService, useValue: stubToolsInfoService },
        { provide: CONFIDENCE_RATING_CONFIG, useValue: stubConfidenceRatingConfig },
        { provide: ExternalLinkService, useValue: stubExternalLinkService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it('should update the tools if the search input is changed', fakeAsync(() => {
      const changedSpy = spyOn(component.toolsInfoService, 'filterList');

      component.searchInput.setValue('test');
      tick(500);
      expect(changedSpy).toHaveBeenCalledWith('test');
    }));
  });

  describe('METHOD: starDisplay', () => {
    it('should convert confidence to star display', () => {
      component.starsToDisplay = 3;
      expect(component.starDisplay(50)).toBe(1.5);
    });

    it('should convert confidence to star display', () => {
      component.starsToDisplay = 5;
      expect(component.starDisplay(50)).toBe(2.5);
    });
  });
});
