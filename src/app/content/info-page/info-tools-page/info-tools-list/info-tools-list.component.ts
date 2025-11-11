import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InfoToolsService } from '../info-tools.service';

@Component({
  selector: 'app-info-tools-list',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './info-tools-list.component.html',
  styleUrl: './info-tools-list.component.scss',
})
export class InfoToolsList {
  public tools$;

  constructor(private readonly infoToolsService: InfoToolsService) {
    this.tools$ = this.infoToolsService.tools$;
  }
}
