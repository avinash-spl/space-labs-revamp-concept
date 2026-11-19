import React from "react";
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ImageCarousel.module.css";

const Carousel =
  typeof CarouselImport === "function"
    ? CarouselImport
    : CarouselImport.default || CarouselImport;

const DEFAULT_SLIDES = {
  1: [
    "/assets/product1/rail1.jpg",
    "/assets/product1/rail2.jpg",
    "/assets/product1/rail3.jpg",
    "/assets/product1/rail4.jpg",
  ],
  2: [
    "/assets/product2/hbd.png",
    "/assets/product2/productBg2.jpg",
    "/assets/product1/rail2.jpg",
  ],
  3: [
    "/assets/product3/rail1.jpg",
    "/assets/product3/rail2.jpg",
    "/assets/product3/rail3.jpg",
    "/assets/product3/MVIS_Banner.jpg",
  ],
  4: [
    "/assets/product4/rail1.jpg",
    "/assets/product4/rail2.jpg",
    "/assets/product4/rail3.jpg",
    "/assets/product4/CCM_better_image.png",
  ],
  5: [
    "/assets/product5/arial1.png",
    "/assets/product5/arial2.png",
    "/assets/product5/arial3.png",
    "/assets/product5/Arial_section_img.png",
  ],
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ImageCarousel = ({ val = 1, images }) => {
  const slides =
    images && images.length > 0
      ? images
      : DEFAULT_SLIDES[val] || DEFAULT_SLIDES[1];

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3500}
        infinite={true}
        showDots={true}
        arrows={true}
        swipeable={true}
        draggable={true}
      >
        {slides.map((src, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img
              src={src}
              alt={`slide-${index}`}
              className={styles.carouselImage}
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
