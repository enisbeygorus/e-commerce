import Section from "../components/Section/Section";
import CartItems from "../components/CartUI/CartItems";
import CartDetail from "../components/CartUI/CartDetail";

const Cart = () => {
  const numberOfCartItems = 2;

  return (
    <div>
      <Section maxWidth="max-w-[1250px]">
        <div className="w-full px-2 md:p-0">
          <div className="font-bold text-left text-lg mb-4">
            Total Items ({numberOfCartItems})
          </div>
          <div className="w-full flex-col flex md:flex-row text-gray-700">
            <div className="w-full md:w-3/4">
              <CartItems isHeaderPopup={false} />
            </div>
            <div className="w-full md:w-1/4 pl-2  min-w-[250px]">
              <CartDetail />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Cart;
