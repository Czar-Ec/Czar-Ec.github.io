import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoToolsList } from './info-tools-list.component';
import { InfoToolsService } from '../info-tools.service';
import { ScreenService } from '../../../../shared/screen.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { of } from 'rxjs';

describe('InfoToolsList', () => {
  let component: InfoToolsList;
  let fixture: ComponentFixture<InfoToolsList>;

  let infoToolsServiceStub: any;
  let screenServiceStub: any;

  beforeEach(async () => {
    infoToolsServiceStub = {
      tools$: () => of({ tools: {} }),
    };

    screenServiceStub = {
      isMobile$: {},
    };

    await TestBed.configureTestingModule({
      imports: [InfoToolsList],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: InfoToolsService,
          useValue: infoToolsServiceStub,
        },
        {
          provide: ScreenService,
          useValue: screenServiceStub,
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoToolsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
