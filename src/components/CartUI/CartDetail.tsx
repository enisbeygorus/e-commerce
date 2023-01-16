import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";

const CartDetail = () => {
  const { cartItems } = useSelector(ACTION_SELECTORS.getCart);

  const sumPrice = cartItems
    .reduce((total, cartItem) => {
      return total + parseFloat(cartItem.price) * cartItem.amount;
    }, 0)
    .toFixed(2);

  const shipmentPrice = "20.00";

  return (
    <div className="w-full">
      <div className="border rounded px-4 py-3 mb-4">
        <h3 className="text-left text-xl mb-4">Cart Detail</h3>
        <div className="flex mb-2">
          <span className="flex-1 text-left">Total order</span>
          <strong>{sumPrice} TL</strong>
        </div>
        <div className="flex mb-2">
          <span className="flex-1 text-left">Shipment</span>
          <strong>{shipmentPrice} TL</strong>
        </div>
        <hr />
        <div className="text-right mt-2">
          <strong>{parseFloat(shipmentPrice) + parseFloat(sumPrice)} TL</strong>
        </div>
      </div>
      <div>
        <Button
          text="proceed to payment"
          className="bg-green-700 w-full rounded-md text-white capitalize"
        />
      </div>
    </div>
  );
};

export default CartDetail;
