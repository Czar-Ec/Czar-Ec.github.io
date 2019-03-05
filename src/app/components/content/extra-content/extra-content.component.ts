import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-content',
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.scss']
})
export class ExtraContentComponent implements OnInit {

  public compLangs = languages;

  constructor() { }

  ngOnInit() {
  }

}

const languages = [
  'C',
  'C++',
  'Java',
  'HTML',
  'CSS',
  'SQL',
  'JS',
  'PHP',
  'Gherkin',
  'Jasmine',
  'Maven',
  'Rasp Pi',
  'Spring',
  'SDL'
];
