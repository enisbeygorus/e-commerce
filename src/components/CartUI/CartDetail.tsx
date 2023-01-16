import Button from "../Button/Button";

const CartDetail = () => {
  return (
    <div className="w-full">
      <div className="border rounded px-4 py-3 mb-4">
        <h3 className="text-left text-xl mb-4">Cart Detail</h3>
        <div className="flex mb-2">
          <span className="flex-1 text-left">Total order</span>
          <strong>323,99 TL</strong>
        </div>
        <div className="flex mb-2">
          <span className="flex-1 text-left">Shipment</span>
          <strong>20,00 TL</strong>
        </div>
        <hr />
        <div className="text-right mt-2">
          <strong>771,99 TL</strong>
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
