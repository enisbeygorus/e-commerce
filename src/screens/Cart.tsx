import Section from "../components/Section/Section";
import CartItems from "../components/CartUI/CartItems";
import CartDetail from "../components/CartUI/CartDetail";
import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../store/actionSelectors";
import Button from "../components/Button/Button";
import { ShoppingCartIcon } from "../assets/Icons";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector(ACTION_SELECTORS.getCart);
  return (
    <div>
      <Section maxWidth="max-w-[1250px]">
        <div className="w-full px-2 md:p-0">
          {cartItems.length > 0 ? (
            <>
              <div className="font-bold text-left text-lg mb-4">
                Total Items ({cartItems.length})
              </div>
              <div className="w-full flex-col flex md:flex-row text-gray-700">
                <div className="w-full md:w-3/4">
                  <CartItems isHeaderPopup={false} />
                </div>
                <div className="w-full md:w-1/4 md:pl-2  min-w-[250px]">
                  <CartDetail />
                </div>
              </div>
            </>
          ) : (
            <div className="border rounded-md flex p-4 justify-between">
              <div className="flex justify-center items-center font-bold text-lg">
                <div className="w-12 h-12 flex justify-center items-center mr-4">
                  <ShoppingCartIcon width={40} height={40} />
                </div>
                <span>Cart is empty</span>
              </div>
              <div className="flex justify-center items-center">
                <Link to={"/"}>
                  <Button
                    text="Continue to shopping"
                    className="bg-green-700 hover:bg-green-500 text-white rounded-md"
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Cart;
