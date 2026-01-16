
export interface Project {
  id: string;
  title: string;
  tools: string[];
  description: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'video' | 'contact';
