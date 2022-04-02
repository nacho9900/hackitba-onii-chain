export type Profile = {
  imageUrl: string;
  name: string;
  bio: string;
  scoring: number;
  location?: string;
};

export enum ProjectType {
  Product,
  Service,
  Other,
}

export type Project = {
  name: string;
  description: string;
  createdOn: Date;
  startOn: Date;
  invested: number;
  earning: number;
  category: string;
  type: ProjectType;
  quantity?: number;
};
