import { useEffect, useState } from "react";
import Section from "../components/Section/Section";
import Price from "../components/ProductSinglePageUI/Price";
import ProductStarts from "../components/ProductSinglePageUI/ProductStarts";
import ProductSizes from "../components/ProductSinglePageUI/ProductSizes";
import ProductCount from "../components/ProductSinglePageUI/ProductCount";
import ProductTitle from "../components/ProductSinglePageUI/ProductTitle";
import ProductColors from "../components/ProductSinglePageUI/ProductColors";
import ProductImages from "../components/ProductSinglePageUI/ProductImages";
import { HeartIcon2 } from "../assets/Icons";
import Button from "../components/Button/Button";

import { productData, productDataInitial } from "../database";
import { IProduct } from "../types";

const ProductSingle = () => {
  const [sizeSelected, setSelectedSize] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(1);
  const [product, setProduct] = useState<IProduct>(productDataInitial);

  const {
    title,
    price,
    isFavorite,
    discountPrice,
    sizes,
    availableColors,
    currency,
    imageUrls,
  } = product;

  useEffect(() => {
    setTimeout(() => {
      setProduct(productData);
    }, 1500);
  }, []);

  const sizeSelectHandler = (value: string) => {
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
          <div className="flex flex-1 md:w-1/2 justify-center">
            <ProductImages imageUrls={imageUrls} />
          </div>
          <div className="flex-1 px-4 md:pl-4 md:w-1/2">
            <ProductTitle title={title} />
            {/* <ProductStarts /> */}
            <Price
              price={price}
              currency={currency}
              discountPrice={discountPrice}
            />
            <hr className="mb-8"></hr>
            <ProductColors availableColors={availableColors} />

            <ProductSizes
              sizes={sizes}
              sizeSelectHandler={sizeSelectHandler}
              sizeSelected={sizeSelected}
            />

            <ProductCount
              itemCount={itemCount}
              itemCountHandler={itemCountHandler}
            />
            <div className="w-full md:w-80 flex">
              <Button
                text="Add to cart"
                className="bg-green-500 hover:bg-green-700 text-white w-full rounded-md"
              />
              <div className="flex justify-center items-center ml-2">
                {isFavorite ? (
                  <HeartIcon2 width={40} height={40} fill="black" />
                ) : (
                  <HeartIcon2 width={40} height={40} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProductSingle;
