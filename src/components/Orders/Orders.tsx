import Order from "./Order/Order";

const Orders = () => {
  const data = [
    {
      id: "12345",
      imageUrl:
        "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10513998-stock-photo-red-jacket.jpg",
      orderNo: 112233,
      date: "25/12/2022, 10:20",
      orderStatus: "completed",
      price: "155,00",
      currency: "TL",
      paymentMethod: "credit-card",
    },
    {
      id: "1111",
      imageUrl:
        "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10513998-stock-photo-red-jacket.jpg",
      orderNo: 22334455,
      date: "25/12/2022, 10:20",
      orderStatus: "failed",
      price: "255,00",
      currency: "TL",
      paymentMethod: "credit-card",
    },
    {
      id: "12341234",
      imageUrl:
        "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10514033-stock-photo-green-jacket.jpg",
      orderNo: 234125,
      date: "25/12/2022, 10:20",
      orderStatus: "preparing",
      price: "255,00",
      currency: "TL",
      paymentMethod: "credit-card",
    },
  ];

  const content = data.map((order) => {
    return (
      <div key={order.id} className="mb-4">
        <Order order={order} />
      </div>
    );
  });

  return <div className="px-2">{content} </div>;
};

export default Orders;
