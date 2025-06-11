// Define interfaces for Project, Patent, etc.

export interface Project {
  id: string;
  name: string;
  description: string;
  owner: string;
  budget: number;
  roi: number;
  stage: 'Idea' | 'Development' | 'Testing' | 'Completed';
}

export interface Patent {
  id: string;
  name: string;
  filingDate: string;
  status: string;
  link: string;
} 