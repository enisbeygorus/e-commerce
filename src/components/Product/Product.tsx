import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";
import ProductIcon from "./ProductIcon";
import { isMobile } from "../../utils";
import SkeletonLoading from "./SkeletonLoading";
import "./Product.css";

interface IProductProperties {
  name: string;
  value: string;
}

interface IProduct {
  product: {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    avaibleSizes: Array<string> | [];
    avaibleColors: Array<string> | [];
    categoryName: string;
    clotheModel: string;
    discountPrice: string | null;
    isFavorite: boolean;
    currency: string;
    deliverTime: string;
    productDescription: string;
    productProperties?: Array<IProductProperties> | [] | null;
  };
}

const Product = ({ product }: IProduct) => {
  if (product === null) {
    return <SkeletonLoading />;
  }
  const {
    id,
    avaibleColors,
    currency,
    categoryName,
    clotheModel,
    deliverTime,
    discountPrice,
    imageUrl,
    isFavorite,
    price,
    productDescription,
    avaibleSizes,
    title,
    productProperties,
  } = product;

  return (
    <div className="productItem relative flex flex-col">
      <ProductImage imageUrl={imageUrl} />
      <ProductDetail />
      {isMobile() ? (
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
