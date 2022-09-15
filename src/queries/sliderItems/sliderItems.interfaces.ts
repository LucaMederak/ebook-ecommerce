export interface ISliderData {
  sys: {
    id: string;
  };
  name: string;
  link: string;
  description: string;
  image: {
    sys: {
      id: string;
    };
    url: string;
  };
}

export interface ISliderItemsQuery {
  sliderCollection: {
    items: ISliderData[];
  };
}
