import { Component, OnInit } from '@angular/core';

interface Experience {
  role: string;
  name: string;
  link: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-work-exp-content',
  templateUrl: './work-exp-content.component.html',
  styleUrls: ['./work-exp-content.component.scss']
})
export class WorkExpContentComponent implements OnInit {

  public experience: Experience[];

  constructor() {
    this.experience = list;
  }

  ngOnInit() {
  }

  openLink(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}

const list: Experience[] = [
  {
    role: 'Junior Engineer',
    name: 'Envitia',
    link: 'https://www.envitia.com/',
    date: 'Aug 2018 - Current',
    description: 'Working as part of the web development team, working on various projects, involving AngularJS ' +
      'and Java. The projects I contributed to ranged from geospatial software to data analytics software'
  },
  {
    role: 'Student Demonstrator',
    name: 'University of Reading',
    link: 'http://www.reading.ac.uk/',
    date: 'Oct 2017 - Apr 2018',
    description: 'The job required the ability to assist the lecturer(s) in the practical portion of the Programming module;' +
      ' therefore also requiring an extensive knowledge of programming concepts and experience in the main IDE and programming' +
      'language (Visual Studio and C/C++) chosen by the university to teach the module with. Additional requirements from the ' +
      'role was to ensure the students completed the tasks and to mark their tasks sheets to verify that the task is indeed complete,' +
      ' as well as resolving any issues which may arise, such as compiler errors which the students may require help with.'
  },
  {
    role: 'Kitchen Worker',
    name: 'A&T Healthcare',
    link: 'http://healthlovingcare.com/',
    date: 'Sept 2017 - Oct 2017',
    description: 'The job role required helping nurses organise the food for lunch and supper of the nursing home residents as well as ' +
      'serving tea and coffee to everyone, including visitors, during tea times. Part of the job also requires cleaning dishes and' +
      ' cutlery as well as maintaining the cleanliness and organisation of the kitchen area.'
  },
  {
    role: 'Staff Member',
    name: 'KFC Horsham',
    link: '',
    date: 'Aug 2012 - Sep 2016',
    description:
      'Working in 3 different sections of the shop; front, middle and back. Front section requires serving customers, middle section ' +
      'requires making burger orders, side items as well as maintaining the amount of prepared food items. The back section required ' +
      'organisation of the storage room as well as transferring items from the storage room to the front and middle section. ' +
      'The role also required the maintenance of the cleanliness of the eating area as well as ensuring the customers are comfortable.'
  }
];
