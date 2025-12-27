import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { ScreenService } from '../../../../shared/screen.service';
import { InfoToolsService } from '../info-tools.service';
import { InfoToolsList } from './info-tools-list.component';

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
