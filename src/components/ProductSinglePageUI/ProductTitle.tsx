import { IProduct } from "../../types";

type IProductTitle = Pick<IProduct, "title">;

const ProductTitle = ({ title }: IProductTitle) => {
  return (
    <div className=" text-left text-lg text-gray-700 font-bold mb-2">
      {title}
    </div>
  );
};

export default ProductTitle;
