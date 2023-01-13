import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";

interface ICartItems {
  isHeaderPopup: boolean;
}

const CartItems = ({ isHeaderPopup = false }: ICartItems) => {
  const { cartItems } = useSelector(ACTION_SELECTORS.getCart);

  const cartItem = cartItems.map((item, index) => {
    return <CartItem key={index} item={item} isHeaderPopup={isHeaderPopup} />;
  });

  return <ul>{cartItem}</ul>;
};

export default CartItems;
