export type Profile = {
  id: number
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
  id: number;
  profileId: number;
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

export type InvestedCategory = {
  name: string;
  investedOn: Date;
  invested: number;
  earnings: number;
};

export type InvestOnCategoryItem = {
  name: string;
  imageUrl: string;
  profit: number;
};
