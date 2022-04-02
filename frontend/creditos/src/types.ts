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
  imageUrl: string;
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

export type Filter = {
  name: string;
  values: FilterValue[];
};

export type FilterValue = {
  name: string;
  checked: boolean;
};

