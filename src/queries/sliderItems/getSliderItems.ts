import { useQuery } from "@apollo/client";
import { SliderItemsQuery } from "./sliderItems.query";
import { ISliderItemsQuery } from "./sliderItems.interfaces";
import { ISliderItem } from "@/interfaces/sliderItems.interfaces";

export const GetSliderItems = () => {
  const { data, error, loading } =
    useQuery<ISliderItemsQuery>(SliderItemsQuery);

  const sliderItems = data?.sliderCollection.items.map((sliderData) => {
    const sliderItem: ISliderItem = {
      id: sliderData.sys.id,
      name: sliderData.name,
      link: sliderData.link,
      description: sliderData.description,
      img: {
        id: sliderData.image.sys.id,
        url: sliderData.image.url,
      },
    };

    return sliderItem;
  }) as ISliderItem[];

  return {
    sliderItems,
    sliderItemsLoading: !sliderItems && !error,
    sliderItemsError: error,
  };
};
