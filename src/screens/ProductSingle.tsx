import { useState } from "react";
import Section from "../components/Section/Section";
import Price from "../components/ProductSinglePageUI/Price";
import ProductStarts from "../components/ProductSinglePageUI/ProductStarts";
import ProductSizes from "../components/ProductSinglePageUI/ProductSizes";
import ProductCount from "../components/ProductSinglePageUI/ProductCount";
import ProductTitle from "../components/ProductSinglePageUI/ProductTitle";
import ProductColors from "../components/ProductSinglePageUI/ProductColors";
import ProductImages from "../components/ProductSinglePageUI/ProductImages";

import Button from "../components/Button/Button";

const ProductSingle = () => {
  const [sizeSelected, setSelectedSize] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(1);

  const sizeSelectHandler = (value: number) => {
    setSelectedSize(value);
  };
  const itemCountHandler = (value: number) => {
    if (itemCount + value < 1) return;
    setItemCount((prev) => prev + value);
  };

  return (
    <div>
      <Section maxWidth="max-w-[1250px]">
        <div className="md:flex w-full">
          <div className="flex flex-1 md:w-1/2">
            <ProductImages />
          </div>
          <div className="flex-1 px-4 md:pl-4 md:w-1/2">
            <ProductTitle />
            <ProductStarts />
            <Price />
            <hr></hr>
            <ProductColors />

            <ProductSizes
              sizeSelectHandler={sizeSelectHandler}
              sizeSelected={sizeSelected}
            />

            <ProductCount
              itemCount={itemCount}
              itemCountHandler={itemCountHandler}
            />
            <div className="w-full md:w-72">
              <Button
                text="Add to cart"
                className="bg-green-500 hover:bg-green-700 text-white w-full rounded-md"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductSingle;
