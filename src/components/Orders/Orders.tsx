import Order from "./Order/Order";

const Orders = () => {
  const data = [
    {
      id: "12345",
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
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
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
      orderNo: 22334455,
      date: "25/12/2022, 10:20",
      orderStatus: "completed",
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

  return <div>{content} </div>;
};

export default Orders;
