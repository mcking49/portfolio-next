import { BaseData } from ".";

export interface Project extends BaseData {
  name: string;
  imageURL: string;
  tags: string[];
  description: string;
  projectURL?: string;
}
