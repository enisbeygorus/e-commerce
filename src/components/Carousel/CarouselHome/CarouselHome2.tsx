import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productsData } from "../../../database";
import Product from "../../Product/Product";

const CarouselHome2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const content = productsData.map((product, index) => {
    return <Product key={index} product={product} />;
  });
  return (
    <Carousel
      containerClass={`w-full`}
      infinite={true}
      swipeable={false}
      draggable={true}
      autoPlay={true}
      responsive={responsive}
      autoPlaySpeed={3000}
      transitionDuration={500}
      //   removeArrowOnDeviceType={["mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass=""
    >
      {content}
    </Carousel>
  );
};

export default CarouselHome2;
