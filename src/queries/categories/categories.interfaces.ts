export interface ICategoryData {
  sys: {
    id: string;
  };
  name: string;
  slug: string;
  shortDescription: string;
  image: {
    sys: {
      id: string;
    };
    url: string;
  };
}

export interface ICategoriesQuery {
  categoriesCollection: {
    items: ICategoryData[];
  };
}
