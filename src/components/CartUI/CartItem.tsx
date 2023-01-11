import { Link } from "react-router-dom";
import { TrashCanIcon } from "../../assets/Icons";

interface ICartItem {
  isHeaderPopup: boolean;
  item: {
    title: string;
    color: string;
    size: string;
    price: string;
    currency: string;
  };
}

const CartItem = ({ item, isHeaderPopup }: ICartItem) => {
  return (
    <li className="mb-4">
      <div className={`flex border p-2 rounded text-gray-700 lg:p-4`}>
        <input className="mr-4 w-" type={"checkbox"} />
        <div className="h-20 aspect-auto mr-4">
          <img
            alt="cart_item_image"
            className="w-full h-full"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
          />
        </div>
        <div className="w-full md:flex">
          <div className="w-full md:w-5/12 text-left ">
            <Link to="/products/Erkek-Gri-Örme-Yarım-Fermuar-Oversize-Sweatshirt">
              <div>{item.title}</div>
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
                <select className="w-24 outline-none text-center border">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            ) : null}
            <div className="flex justify-center items-center">
              {item.price} {item.currency}
            </div>
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center cursor-pointer">
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
