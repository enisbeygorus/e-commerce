import CartItem from "./CartItem";

interface ICartItems {
  isHeaderPopup: boolean;
}

const CartItems = ({ isHeaderPopup = false }: ICartItems) => {
  const cartItems = [
    {
      title: "Erkek Alaska Fermuar Detay Oversize Sweatshir",
      color: "Black",
      size: "M",
      price: "99,99",
      currency: "TL",
    },
    {
      title: "Erkek Alaska Fermuar Detay Oversize Sweatshir 2",
      color: "Kırmızı",
      size: "S",
      price: "224,00",
      currency: "TL",
    },
    // {
    //   title: "Erkek Alaska Fermuar Detay Oversize Sweatshir 2",
    //   color: "Kırmızı",
    //   size: "S",
    //   price: "224,00",
    //   currency: "TL",
    // },
    // {
    //   title: "Erkek Alaska Fermuar Detay Oversize Sweatshir 2",
    //   color: "Kırmızı",
    //   size: "S",
    //   price: "224,00",
    //   currency: "TL",
    // },
  ];

  const cartItem = cartItems.map((item, index) => {
    return <CartItem key={index} item={item} isHeaderPopup={isHeaderPopup} />;
  });

  return <ul>{cartItem}</ul>;
};

export default CartItems;
