type PopularTool ={
  title: string;
  license: string;
  description: string;
  isFavourite: boolean;
  isAdded: boolean;
  url: string;
  icon?: string;
};

type Partner = {
  name: string;
  url: string;
};


export type {PopularTool, Partner};
