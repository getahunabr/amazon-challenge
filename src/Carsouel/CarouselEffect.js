import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { img } from "./image/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

const Carousel = () => {
  return (
    <div>
      <ResponsiveCarousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
        ))}
      </ResponsiveCarousel>
      <div className={classes.hero_img}></div>
    </div>
  );
};

export default Carousel;
