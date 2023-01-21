import { useMemo } from "react";
import CarouselMulti from "../CarouselMulti/CarouselMulti";
import { productsData } from "../../../database";
import Product from "../../Product/Product";

const CarouselHome = () => {
  const responsive = useMemo(
    () => [
      { maxWidth: 640, numberOfCartsShow: 2 },
      { maxWidth: 768, numberOfCartsShow: 3 },
      { maxWidth: 1024, numberOfCartsShow: 4 },
      { maxWidth: 1280, numberOfCartsShow: 5 },
      { maxWidth: 1536, numberOfCartsShow: 5 },
    ],
    []
  );

  const content = productsData.map((product, index) => {
    return <Product key={index} product={product} />;
  });

  return (
    <div className="px-2 w-full">
      <CarouselMulti responsive={responsive}>{content}</CarouselMulti>
    </div>
  );
};

export default CarouselHome;
