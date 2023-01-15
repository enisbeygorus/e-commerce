import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";

interface ICartItems {
  isHeaderPopup: boolean;
}

const CartItems = ({ isHeaderPopup = false }: ICartItems) => {
  const { cartItems } = useSelector(ACTION_SELECTORS.getCart);

  if (cartItems.length === 0) {
    return (
      <div
        style={{ width: "200px" }}
        className="text-center h-10 flex justify-center items-center text-gray-700"
      >
        Cart is empty
      </div>
    );
  }
  const cartItem = cartItems.map((item, index) => {
    return <CartItem key={index} item={item} isHeaderPopup={isHeaderPopup} />;
  });

  return (
    <div style={{ width: isHeaderPopup ? "500px" : "" }}>
      <ul>{cartItem}</ul>
    </div>
  );
};

export default CartItems;
