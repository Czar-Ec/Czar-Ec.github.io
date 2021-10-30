export interface ToolInfoItem {
  name: string;
  description: string;
  confidence: number;
  tags: string[];
  reference?: string;
  previewImage?: any;
  exampleProjects?: ProjectReference[];
}

export interface ProjectReference {
  name: string;
  url: string;
}
