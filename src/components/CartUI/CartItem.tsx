import { Link } from "react-router-dom";
import { TrashCanIcon } from "../../assets/Icons";
import { ICartItem } from "../../types";
import Dropdown from "../Dropdown";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../store/reducers/cart";

interface ICartItemComp {
  isHeaderPopup: boolean;
  item: ICartItem;
}

const CartItem = ({ item, isHeaderPopup }: ICartItemComp) => {
  const dispatch = useDispatch();

  const removeItemHandler = (id: string) => {
    dispatch(removeItem(id));
  };

  const amountChangeHandler = (id: string, value: string) => {
    const parsedValue = parseInt(value);
    const newCartItem: ICartItem = { ...item, amount: parsedValue };

    dispatch(updateItem(newCartItem));
  };

  return (
    <li className="mb-4">
      <div
        className={`flex border p-2 rounded text-gray-700 lg:p-4 ${
          isHeaderPopup ? "border-x-0" : ""
        }`}
      >
        <div className="mr-4 flex flex-col items-center justify-center">
          <label>
            <input
              aria-label="cartItem_checkbox"
              id={`cartItem_checkbox_${item.id}_${Math.floor(
                Math.random() * 100000
              )}`}
              type={"checkbox"}
            />
          </label>
        </div>
        <div className="w-20 aspect-auto mr-4 flex items-center">
          <img
            alt="cart_item_image"
            className="w-full h-auto"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
          />
        </div>
        <div className="w-full md:flex">
          <div className="w-full md:w-5/12 text-left ">
            <Link to={`/products/${item.productUrl}`}>
              <div className={`${isHeaderPopup}`}>{item.title}</div>
            </Link>
            <div className="flex text-sm ">
              <span className="mr-2">Color:</span>
              <span className="font-bold">{item.color}</span>
            </div>
            <div className="flex text-sm">
              <span className="mr-2">Size:</span>
              <span className="font-bold">{item.size}</span>
            </div>
          </div>
          <div className="flex flex-1 justify-between md:justify-around">
            {!isHeaderPopup ? (
              <div className="flex justify-center items-center">
                <Dropdown
                  onChange={amountChangeHandler}
                  buttonClassName="py-0 sm:py-0.5"
                  defaultSelectedId={item.amount.toString()}
                  data={Array.from(Array(20).keys()).map((val) => {
                    val++;
                    return { id: val.toString(), value: val.toString() };
                  })}
                />
              </div>
            ) : null}
            <div className="flex justify-center items-center">
              {item.price} {item.currency}
            </div>
            <div className="flex justify-center items-center">
              <div
                onClick={() => removeItemHandler(item.id)}
                className="flex justify-center items-center cursor-pointer"
              >
                <TrashCanIcon width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
