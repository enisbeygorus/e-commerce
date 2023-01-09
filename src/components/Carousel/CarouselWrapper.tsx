import React from "react";

interface ICarouselWrapper {
  children: React.ReactNode;
}
const CarouselWrapper = ({ children }: ICarouselWrapper) => {
  return <div className="max-w-[1280px]">{children}</div>;
};

export default CarouselWrapper;
