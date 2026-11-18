import React from "react";
import CarouselImport from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./ImageCarousel.module.css"; // Import module.css

const Carousel =
  typeof CarouselImport === "function"
    ? CarouselImport
    : CarouselImport.default || CarouselImport;

// const images = [
//   "/assets/product1/rail3.jpg",
//   "/assets/product1/rail1.jpg",
//   "/assets/product1/rail2.jpg",
//   "/assets/product1/rail4.jpg",
// ];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ImageCarousel = ({ val, images }) => {
  const slides =
    images && images.length > 0
      ? images
      : [...Array(3)].map(
          (_, index) => `/assets/product${val}/rail${index + 1}.jpg`,
        );

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
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
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
