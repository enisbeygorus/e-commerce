import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/reducers/cart";
import { ACTION_SELECTORS } from "../store/actionSelectors";

import Section from "../components/Section/Section";
import Price from "../components/ProductSinglePageUI/Price";
// import ProductStarts from "../components/ProductSinglePageUI/ProductStarts";
import ProductSizes from "../components/ProductSinglePageUI/ProductSizes";
import ProductCount from "../components/ProductSinglePageUI/ProductCount";
import ProductTitle from "../components/ProductSinglePageUI/ProductTitle";
import ProductColors from "../components/ProductSinglePageUI/ProductColors";
import ProductImages from "../components/ProductSinglePageUI/ProductImages";
import { HeartIcon2 } from "../assets/Icons";
import Button from "../components/Button/Button";
import { SpinningLoading } from "../components/Loading";
import { ModalAddedCart } from "../components/Modal";

import { productDataInitial, productsData } from "../database";
import { IProduct, IProductColor, ICartItem } from "../types";

const ProductSingle = () => {
  const [sizeSelected, setSelectedSize] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(1);
  const [colorSelected, setColorSelected] = useState<IProductColor>(
    productDataInitial.availableColors[0].id
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>(productDataInitial);
  const { productName } = useParams();
  const dispatch = useDispatch();

  const { amount } = useSelector(ACTION_SELECTORS.getCart);

  const {
    id,
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
      const foundProduct = productsData.find(
        (product) => product.productUrl === productName
      );

      const newProduct = foundProduct ? foundProduct : productDataInitial;

      setProduct(newProduct);
      setColorSelected(newProduct.availableColors[0].id);
    }, 1500);
  }, [productName]);

  useEffect(() => {
    if (amount > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [amount]);

  const sizeSelectHandler = (value: string) => {
    setSelectedSize(value);
  };
  const itemCountHandler = (value: number) => {
    if (itemCount + value < 1) return;
    setItemCount((prev) => prev + value);
  };

  const addToCartHandler = () => {
    const newCart: ICartItem = {
      id,
      amount: itemCount,
      color: "black",
      currency,
      discountPrice,
      price,
      size: sizeSelected,
      title,
    };
    setLoading(true);
    dispatch(addItem(newCart));
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
            <ProductColors
              setColorSelected={setColorSelected}
              colorSelected={colorSelected}
              availableColors={availableColors}
            />

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
              {loading ? (
                <Button className="bg-gray-200 rounded-md w-full flex justify-center items-center py-0">
                  <SpinningLoading />
                </Button>
              ) : (
                <Button
                  onClick={addToCartHandler}
                  text="Add to cart"
                  className="bg-green-700 hover:bg-green-500 text-white w-full rounded-md"
                />
              )}
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
      <ModalAddedCart isModalOpen={true} />
    </div>
  );
};

export default ProductSingle;
