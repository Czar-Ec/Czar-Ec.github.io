import { Component, OnInit } from '@angular/core';
import { QualType, Qualification } from './qual-enums';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-education-content',
  templateUrl: './education-content.component.html',
  styleUrls: ['./education-content.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EducationContentComponent implements OnInit {

  qualificationTypes = [
    QualType.thirdyr,
    QualType.secondyr,
    QualType.firstyr,
    QualType.alvl2,
    QualType.alvl,
    QualType.gcse,
    QualType.btec2
  ];

  public qualList = new MatTableDataSource<Qualification>(qualifications);
  public columnsDisplayed = ['subject', 'grade'];
  public expandedElement: Qualification | null;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Filters the table data source via the
   * chosen qualification type
   * @param filterVal filter value
   */
  filter(filterVal: string) {
    this.qualList.filter = filterVal;
  }

  /**
   * Opens the project in another tab
   * @param projectUrl project url location
   */
  public openProject(projectUrl) {
    window.open(projectUrl, '_blank');
  }
}

const qualifications: Qualification[] = [
  {
    qualType: QualType.thirdyr,
    subject: 'Advanced Computing',
    description: 'Module involves the study of parallel and distributed computing, '
      + ' as well as the concept of MapReduce using Hadoop and CUDA as case studies',
    grade: 'B',
    percentage: 67,
    projects: [{
      project_title: 'MapReduce',
      project_link: 'https://github.com/Czar-Ec/MapReduce',
      project_description: 'An attempt at reproducing Hadoop\'s MapReduce functionality'
    }]
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Computer Networking',
    description: 'Module involves the study of modern computer networks and the core concepts of '
      + ' network architecture and communication protocols',
    grade: 'B',
    percentage: 64
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Data Mining',
    description: 'The module is a brief introduction to the principles and techniques used in '
      + ' Data Mining and how to apply them to the relevant contexts',
    grade: 'C',
    percentage: 53
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Information Security',
    description: 'The module covers the major threats and risks that affect the security of a' +
      ' network and the systems that rely on it (network security), and the major threats to data' +
      ' in both structured and unstructured form (data security).',
    grade: 'A',
    percentage: 85
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Social, Legal and Ethical Aspects of Engineering',
    description: 'The module covers the Social, Legal and Ethical problems which may be' +
      ' encountered while working in the technology/engineering industry',
    grade: 'A',
    percentage: 72
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Software Quality and Testing',
    description: 'The module covers the different software testing techniques as well as the' +
      ' different ways software quality is maintained during software development',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Virtual Reality',
    description: 'Partially a group based module, where students study the basics of virtual reality' +
      ' as well as how graphics are used to create an immersive virtual environment',
    grade: 'B',
    percentage: 67,
    projects: [{
      project_title: 'VRGroupCoursework',
      project_link: 'https://github.com/JamesTang2905/VRGroupCoursework',
      project_description: '5 separate but interconnected worlds which show spatial impossibilities / ' +
        'breaks normal perception (the aim of the coursework anyway)'
    }]
  },
  {
    qualType: QualType.thirdyr,
    subject: 'Individual Project',
    description: 'The individual project is a module where students can plan, ' +
      ' research, apply and present their findings. My project is based on the development' +
      ' of a "Zombie Simulator", which simulates how a zombie/infection can spread around a map',
    grade: 'A',
    percentage: 70,
    projects: [{
      project_title: 'ZEUS',
      project_link: 'https://github.com/Czar-Ec/ZEUS',
      project_description: 'C++ based Zombie simulator, which utilises SDL and ImGUI to render graphics'
    }]
  },
  {
    qualType: QualType.secondyr,
    subject: 'Essential Algorithms',
    description: 'The module covers the concepts of algorithms and algorithm design. The module also covers ' +
      ' fundamental algorithms such as Divide and Conquer, Greedy algorithms and analysing and assess an algorithm\'s efficiency',
    grade: 'A',
    percentage: 88
  },
  {
    qualType: QualType.secondyr,
    subject: 'Java',
    description: 'The module covers the concepts used in Java programming, such as Object Oriented Programming.',
    grade: 'A',
    percentage: 76,
    projects: [
      {
        project_title: 'Artificial Life Sim',
        project_link: 'https://github.com/Czar-Ec/ArtificialLifeSim',
        project_description: 'A Java based artificial life simulator'
      }
    ]
  },
  {
    qualType: QualType.secondyr,
    subject: 'System Design and Project Management',
    description: 'The module covers how system design and project management is used in software engineering',
    grade: 'A',
    percentage: 75
  },
  {
    qualType: QualType.secondyr,
    subject: 'Neural Networks',
    description: 'The module covers the concepts of neural networks, its history and how it is being used in computing',
    grade: 'A',
    percentage: 74,
    projects: [{
      project_title: 'Neural Network on the Glass data set',
      project_link: '/assets/docs/NeuralNetworkReport.pdf',
      project_description: 'The project was to use the neural network that we have created on a data set and report our findings' +
        'I would post the neural network itself, however most of the code was created by the university and therefore may be a ' +
        'breach of copyright'
    }]
  },
  {
    qualType: QualType.secondyr,
    subject: 'Computer Architecture',
    description: 'The module introduces the underlying theory of modern computer architecture in terms of instruction set ' +
      'architecture, organisation, and hardware',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.secondyr,
    subject: 'Compilers',
    description: 'This module introduces the concepts underlying compiler design and compiler writing, such as: ' +
      'regular expressions, grammars, parsing, and finite state machines',
    grade: 'C',
    percentage: 59
  },
  {
    qualType: QualType.secondyr,
    subject: 'Advanced Databases',
    description: 'Databases but advanced.',
    grade: 'C',
    percentage: 55
  },
  {
    qualType: QualType.secondyr,
    subject: 'Databases',
    description: 'The module covers underlying principles and provides practical experience of the design and ' +
      'implementation of scalable, secure databases',
    grade: 'C',
    percentage: 55
  },
  {
    qualType: QualType.secondyr,
    subject: 'Operating Systems',
    description: 'The module covers the fundamentals of operating systems and provides some experience at ' +
      'code development at the operating systems level.',
    grade: 'C',
    percentage: 51
  },
  {
    qualType: QualType.secondyr,
    subject: 'Robotic Systems',
    description: 'The module provides students with a comprehensive introduction to robotics, as well as a range of ' +
      'robotic systems and architectures',
    grade: 'C',
    percentage: 50
  },
  {
    qualType: QualType.firstyr,
    subject: 'Programming',
    description: 'The module covers the basics of programming using C and C++',
    grade: 'A',
    percentage: 78,
    projects: [{
      project_title: 'Noughts and Crosses',
      project_link: 'https://github.com/Czar-Ec/Noughts-and-Crosses',
      project_description: 'A grid based game using C++ and SDL to render the graphics'
    }]
  },
  {
    qualType: QualType.firstyr,
    subject: 'Software Engineering',
    description: 'The module provides an understanding of the concepts, practice and management of software engineering',
    grade: 'A',
    percentage: 70
  },
  {
    qualType: QualType.firstyr,
    subject: 'Fundamentals and Applications of Computing',
    description: 'The module provides an introduction to discrete mathematics and algorithms,' +
    ' and to introduce students to the discipline of Computer Science.',
    grade: 'C',
    percentage: 57
  },
  {
    qualType: QualType.firstyr,
    subject: 'IWLP Russian Level 1',
    description: 'да.',
    grade: 'C',
    percentage: 57
  },
  {
    qualType: QualType.firstyr,
    subject: 'Codes and Code Breaking',
    description: 'The module covered the basics of cryptography as well as the industry standards of encrypting information (RSA)',
    grade: 'C',
    percentage: 50
  },
  {
    qualType: QualType.alvl2,
    subject: 'IT',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.alvl2,
    subject: 'Physics',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl2,
    subject: 'Chemistry',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl,
    subject: 'Computing',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.alvl,
    subject: 'Mathematics',
    description: '',
    grade: 'D'
  },
  {
    qualType: QualType.gcse,
    subject: 'ICT',
    description: 'Note: Grade is Distinction.',
    grade: 'D'
  },
  {
    qualType: QualType.gcse,
    subject: 'Mathematics',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Physics',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Chemistry',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Biology',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Statistics',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Geography',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'Religious Studies',
    description: '',
    grade: 'A'
  },
  {
    qualType: QualType.gcse,
    subject: 'Media Studies',
    description: '',
    grade: 'B'
  },
  {
    qualType: QualType.gcse,
    subject: 'English Literature',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.gcse,
    subject: 'English Studies',
    description: '',
    grade: 'C'
  },
  {
    qualType: QualType.btec2,
    subject: 'Engineering',
    description: 'Note: Grade is Merit',
    grade: 'M'
  }
];
