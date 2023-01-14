import { IProduct } from "../../types";
import { calculateDiscountPercentange } from "../../utils";

type IPrice = Pick<IProduct, "price" | "discountPrice" | "currency">;

const Price = ({ price, currency, discountPrice }: IPrice) => {
  const discountPercentangeNumber =
    discountPrice !== "" && parseInt(discountPrice) !== 0
      ? calculateDiscountPercentange(parseInt(price), parseInt(discountPrice))
      : 0;

  return (
    <div className="flex items-center my-4">
      {discountPercentangeNumber !== 0 ? (
        <span className="bg-green-500 rounded-full px-2 py-1 text-white font-bold mx-1">
          %{discountPercentangeNumber}
        </span>
      ) : null}
      <span className="line-through mx-1">
        {price}
        {currency}
      </span>
      <span className="text-2xl font-bold mx-1">
        {discountPrice}
        {currency}
      </span>
    </div>
  );
};

export default Price;
