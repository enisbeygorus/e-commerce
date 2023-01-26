import { useEffect, useState } from "react";
import { useParams, ScrollRestoration } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/reducers/cart";

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

import ProductSingleSkeletonLoading from "../components/Loading/SkeletonLoading/ProductSingleSkeletonLoading";

const ProductSingle = () => {
  const [sizeSelected, setSelectedSize] = useState<string>("");
  const [itemCount, setItemCount] = useState<number>(1);
  const [colorSelectedProductId, setColorSelectedProductId] =
    useState<IProductColor>(productDataInitial.availableColors[0].productId);
  const [loading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct>(productDataInitial);
  const { productName } = useParams();
  const dispatch = useDispatch();

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
    productUrl,
  } = product;

  useEffect(() => {
    // api call for product
    setTimeout(() => {
      if (productName) {
        const foundProduct = productsData.find((product) => {
          const regex = new RegExp(productName, "i");

          return product.productUrl.match(regex);
        });

        const newProduct = foundProduct ? foundProduct : productDataInitial;
        const newSize = newProduct.sizes.availableSizes[0];

        setSelectedSize(newSize);
        setProduct(newProduct);
        if (newProduct.availableColors.length > 0) {
          setColorSelectedProductId(newProduct.availableColors[0].productId);
        }

        window.scrollTo(0, 0);
      }
    }, 100);
  }, [productName]);

  const sizeSelectHandler = (value: string) => {
    setSelectedSize(value);
  };
  const itemCountHandler = (value: number) => {
    if (itemCount + value < 1) return;
    setItemCount((prev) => prev + value);
  };

  const addToCartHandler = () => {
    const newCart: ICartItem = {
      id: id + sizeSelected,
      amount: itemCount,
      color: "black",
      currency,
      discountPrice,
      price,
      size: sizeSelected,
      title,
      productUrl,
    };
    setLoading(true);

    // api call for product
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
      dispatch(addItem(newCart));
    }, 1000);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  if (id === "") {
    return <ProductSingleSkeletonLoading />;
  }

  return (
    <div>
      <Section maxWidth="max-w-[1250px]">
        <div id="" className="md:flex w-full">
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
              setColorSelectedProductId={setColorSelectedProductId}
              colorSelectedProductId={colorSelectedProductId}
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
      <ModalAddedCart isModalOpen={showModal} />
    </div>
  );
};

export default ProductSingle;
