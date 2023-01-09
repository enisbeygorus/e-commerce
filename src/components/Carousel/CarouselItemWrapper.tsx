import React from "react";

interface ICarouselItemWrapper {
  children: React.ReactNode;
}

const CarouselItemWrapper = ({ children }: ICarouselItemWrapper) => {
  return <div className="w-56">{children}</div>;
};

export default CarouselItemWrapper;
