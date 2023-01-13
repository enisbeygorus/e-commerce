import { useState } from "react";
import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";
import { isMobile } from "../../utils";
import SkeletonLoading from "./SkeletonLoading";
import { calculateDiscountPercentange } from "../../utils";
import "./Product.css";
import { IProduct } from "../../types";

export interface IProductComponent {
  product: IProduct;
}

const Product = ({ product }: IProductComponent) => {
  const [showAddCard] = useState<boolean>(true);

  if (product === null) {
    return <SkeletonLoading />;
  }
  const { currency, discountPrice, imageUrl, isFavorite, price, title } =
    product;

  const discountPercentangeNumber = discountPrice
    ? calculateDiscountPercentange(parseInt(price), parseInt(discountPrice))
    : 0;

  return (
    <div className="productItem relative flex flex-col">
      {discountPercentangeNumber !== 0 ? (
        <div className="w-10 h-10 text-base absolute top-0 right-0 rounded-tr rounded-bl z-10 sm:w-14 sm:h-14 flex justify-center items-center sm:text-2xl text-white bg-red-500">
          {discountPercentangeNumber} %
        </div>
      ) : null}

      <ProductImage showAddCard={showAddCard} imageUrl={imageUrl} />

      <ProductDetail
        discountPercentangeNumber={discountPercentangeNumber}
        discountPrice={discountPrice}
        price={price}
        currency={currency}
        title={title}
        isFavorite={isFavorite}
      />

      {isMobile() && showAddCard ? (
        <div
          id="product-add-to-card-1"
          title="Add To Card"
          className="text-left font-bold text-gray-700 bg-gray-200  flex justify-center items-center cursor-pointer"
        >
          Add To Card
        </div>
      ) : null}
    </div>
  );
};

export default Product;
