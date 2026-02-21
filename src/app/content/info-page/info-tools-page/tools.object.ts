export interface ExampleProject {
  name: string;
  url: string;
}

export interface Tool {
  name: string;
  description: string;
  confidence: number;
  tags: string[];
  reference: string;
  exampleProjects: ExampleProject[];
  previewImage?: string; // optional field (not all entries have it)
  versions?: string[];
}

export interface ToolsConfig {
  tools: Tool[];
}