import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GetSliderItems } from "@/queries/sliderItems/getSliderItems";
import { wrap } from "popmotion";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import SectionLoading from "@/components/loading/section/SectionLoading";

//components
import Image from "next/image";

import * as Styled from "./Slider.styles";

//animations
import { fadeAnimation, fadeItem } from "@/animations/fade";

const Slider = () => {
  const { sliderItems, sliderItemsLoading, sliderItemsError } =
    GetSliderItems();

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const changeSlides = setInterval(() => paginate(1), 8000);
    return () => {
      clearInterval(changeSlides);
    };
  }, [page]);

  if (sliderItemsLoading) return <SectionLoading />;
  if (sliderItemsError) return null;

  const images = sliderItems.map((sliderItem) => sliderItem.img.url) || [];
  const imageIndex = wrap(0, images.length || 0, page);

  const currentSliderItem = sliderItems.filter(
    ({ img }) => img.url == images[imageIndex]
  )[0];

  return (
    <Styled.SliderWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <Styled.ImageWrapper
          key={page}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 } }}
        >
          <Image
            src={`${images[imageIndex]}`}
            alt="ebookcommerce-slider"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          ></Image>
        </Styled.ImageWrapper>
      </AnimatePresence>

      <Styled.CategoryInfoWrapper
        key={currentSliderItem.id}
        variants={fadeAnimation}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeItem}>{currentSliderItem.name}</motion.h1>
        <motion.p variants={fadeItem}>{currentSliderItem.description}</motion.p>

        <Link href={`/${currentSliderItem.link}`}>
          <a>więcej</a>
        </Link>
      </Styled.CategoryInfoWrapper>

      <Styled.SwitchContainer>
        {images.map((image, i) => (
          <Styled.Switch
            key={image}
            activeSwitch={imageIndex == i}
            onClick={() => setPage([i, 0])}
          >
            <button></button>
          </Styled.Switch>
        ))}
      </Styled.SwitchContainer>
    </Styled.SliderWrapper>
  );
};

export default Slider;
