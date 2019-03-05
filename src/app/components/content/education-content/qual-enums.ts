/**
 * Enums for each qualification type
 */

export enum QualType {
  thirdyr = '3rd Year University',
  secondyr = '2nd Year University',
  firstyr = '1st Year University',
  alvl2 = 'A Level (A2)',
  alvl = 'A Level (AS)',
  gcse = 'GCSE',
  btec2 = 'BTEC Level 2 Diploma'
}

export interface Qualification {
  qualType: QualType;
  subject: string;
  description: string;
  grade: string;
  percentage?: number;
  projects?: Project[];
}

interface Project {
  project_title: string;
  project_link: string;
  project_description: string;
}
