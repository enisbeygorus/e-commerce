import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";
import ProductIcon from "./ProductIcon";
import { isMobile } from "../../utils";
import "./Product.css";

interface IProduct {
  imageUrl: string;
}

const Product = ({ imageUrl }: IProduct) => {
  return (
    <div className="productItem relative flex flex-col">
      <a className="itemCategory hidden" href="/sweatshirt-8" title="">
        <div className="itemCategoryLine">
          <span>SWEATSHİRT</span>
        </div>
      </a>
      <ProductImage imageUrl={imageUrl} />
      <ProductDetail />
      {/* <ProductIcon /> */}
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
