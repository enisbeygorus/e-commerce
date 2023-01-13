import { HeartIcon2 } from "../../assets/Icons";
import { Link } from "react-router-dom";
import { IProductDetail } from "../../types";

const ProductDetail = ({
  title,
  price,
  discountPrice,
  currency,
  discountPercentangeNumber,
  isFavorite,
}: IProductDetail) => {
  return (
    <div className="mb-2 relative">
      <div className="my-3 w-full">
        <Link
          className="flex text-left overflow-hidden text-ellipsis text-sm h-10 w-full"
          title="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
          to="/products/erkek-gri-orme-yarim-fermuar-oversize-sweatshirt"
        >
          {title}
        </Link>
      </div>
      <div className="hidden">
        <div className="rating" data-rating="0">
          <i className="star-1">★</i>
          <i className="star-2">★</i>
          <i className="star-3">★</i>
          <i className="star-4">★</i>
          <i className="star-5">★</i>
        </div>
      </div>
      <div className="flex">
        <div className="discountPrice text-xl font-bold flex items-center flex-1 text-black">
          <span
            className={`${
              discountPercentangeNumber !== 0
                ? "line-through text-xs text-gray-700"
                : "text-base sm:text-xl"
            }`}
          >
            {price} {currency}
          </span>
          {discountPercentangeNumber !== 0 ? (
            <span className="ml-2 text-base sm:text-xl">
              {discountPrice} {currency}
            </span>
          ) : null}
        </div>

        <div className="cursor-pointer" title="Favorilere Ekle">
          {isFavorite ? (
            <HeartIcon2 width={25} height={25} fill={"#000"} />
          ) : (
            <HeartIcon2 width={25} height={25} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
