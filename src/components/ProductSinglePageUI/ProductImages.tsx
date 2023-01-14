import { IProduct } from "../../types";

type IProductImages = Pick<IProduct, "imageUrls">;

const ProductImages = ({ imageUrls }: IProductImages) => {
  return (
    <div className="mb-2 flex flex-col md:m-0 md:flex-row flex-1">
      <div className="hidden w-32 px-4 md:block">
        <div className="flex-1">
          <img
            alt="product_image_select"
            className="w-full h-full"
            src={imageUrls[0]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 px-4 sm:px-0 sm:py-4">
        <div className="">
          <img
            alt="product_image_show"
            className="w-full h-full"
            src={imageUrls[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
