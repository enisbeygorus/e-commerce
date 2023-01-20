import { useMemo } from "react";
import CarouselMulti from "../CarouselMulti/CarouselMulti";
import { productsData } from "../../../database";
import Product from "../../Product/Product";

const CarouselHome = () => {
  const responsive = useMemo(
    () => [
      { maxWidth: 640, numberOfCartsShow: 2 },
      { maxWidth: 768, numberOfCartsShow: 2 },
      { maxWidth: 1024, numberOfCartsShow: 3 },
      { maxWidth: 1280, numberOfCartsShow: 2 },
      { maxWidth: 1536, numberOfCartsShow: 2 },
    ],
    []
  );

  const content = productsData.map((product, index) => {
    return <Product key={index} product={product} />;
  });

  return <CarouselMulti responsive={responsive}>{content}</CarouselMulti>;
};

export default CarouselHome;
