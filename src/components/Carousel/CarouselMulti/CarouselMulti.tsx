import { Children, useEffect, useState, useRef, useMemo } from "react";
import CarouselCart from "./CarouselCart";
import CarousalMultiClass from "./CarousalMultiClass";
import useWindowSize from "../../../hooks/useWindowSize";
import { IResponsiveItem } from "./types";

interface ICarouselMulti {
  children?: React.ReactNode;
  gapBetween?: number;
  responsive: Array<IResponsiveItem>;
}
type ChildrenArray = Array<React.ReactNode>;

const CarouselMulti = ({
  children,
  gapBetween = 20,
  responsive,
}: ICarouselMulti) => {
  const carousalWrapperRef = useRef<HTMLDivElement>(null);
  const caroulsaRef = useRef<HTMLDivElement>(null);
  const arrayOfChildren = useMemo(() => {
    return Children.toArray(children);
  }, [children]);
  const [arrayOfCards, setArrayOfCards] = useState<ChildrenArray>([]);
  const CarousalMultiInstance = useMemo(() => new CarousalMultiClass(), []);
  const [windowWidth] = useWindowSize();

  useEffect(() => {
    // calculate carousalWrapper width and adjust cartWidth
    if (carousalWrapperRef.current && caroulsaRef.current) {
      const numberOfItems = arrayOfChildren.length;

      const carousalWrapperWidth = carousalWrapperRef.current.offsetWidth;

      // dont change carousalResponsive and init order
      CarousalMultiInstance.carousalResponsive(windowWidth, responsive);
      CarousalMultiInstance.init({
        numberOfItems: numberOfItems,
        gapBetween,
        carousalWrapperWidth,
        htmlElement: caroulsaRef.current,
      });

      const carousalArrayOfCardsOrder = CarousalMultiInstance.carousalContent();

      const carousalContent = carousalArrayOfCardsOrder.map((cartInfoObj) => {
        const { itemId, isCopy } = cartInfoObj;
        return (
          <CarouselCart
            style={{
              width: CarousalMultiInstance.cartWidth + "px",
              marginRight: gapBetween + "px",
            }}
            isClone={isCopy}
            key={Math.random()}
            itemId={itemId}
          >
            {arrayOfChildren[itemId]}
          </CarouselCart>
        );
      });

      setArrayOfCards(carousalContent);
    }
  }, [
    gapBetween,
    arrayOfChildren,
    windowWidth,
    responsive,
    CarousalMultiInstance,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      CarousalMultiInstance.caroulsaTranformController(1);
    }, 3500);
    return () => clearInterval(intervalId);
  }, [CarousalMultiInstance]);

  const carousalTransformHandler = (direction: 1 | -1) => {
    CarousalMultiInstance.caroulsaTranformController(direction);
  };

  const rightAndLeftButtons = () => {
    return (
      <>
        <div
          onClick={() => carousalTransformHandler(-1)}
          className="bg-white absolute top-1/2 -translate-y-1/2 left-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer border-2 rounded-md border-gray-700"
        >
          {"<"}
        </div>
        <div
          onClick={() => carousalTransformHandler(1)}
          className="bg-white absolute top-1/2 -translate-y-1/2 right-2 w-12 h-12 flex justify-center items-center font-bold cursor-pointer border-2 rounded-md border-gray-700"
        >
          {">"}
        </div>
      </>
    );
  };

  const onTransitionEnd = () => {
    CarousalMultiInstance.carousalTransitionEndHandler();
  };

  return (
    <div
      ref={carousalWrapperRef}
      style={{ width: `100%` }}
      className="carousal-multi-wrapper flex relative  overflow-hidden"
    >
      <div
        onTransitionEnd={onTransitionEnd}
        ref={caroulsaRef}
        className="carousal-multi flex"
      >
        {arrayOfCards}
      </div>
      {rightAndLeftButtons()}
    </div>
  );
};

export default CarouselMulti;
