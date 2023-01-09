import { productData, responsive } from "./data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product/Product";
import CarouselItemWrapper from "./CarouselItemWrapper";
import CarouselWrapper from "./CarouselWrapper";

const CarouselCustom = () => {
  const product = productData.map((item, i) => (
    <CarouselItemWrapper key={i}>
      <Product />
    </CarouselItemWrapper>
  ));

  return (
    <CarouselWrapper>
      <Carousel responsive={responsive}>{product}</Carousel>
    </CarouselWrapper>
  );
};

export default CarouselCustom;
