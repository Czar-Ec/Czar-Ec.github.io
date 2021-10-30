export interface ProjectDetails {
  projectName: string;
  projectFullName: string;
  projectUrl: string;
  projectDescription: string;
  projectDefaultBranch: string;
  travisBadge?: CIBadge;
  codeCovBadge?: CIBadge;
}

export interface CIBadge {
  badgeUrl: string;
  badgeImage: string;
}
