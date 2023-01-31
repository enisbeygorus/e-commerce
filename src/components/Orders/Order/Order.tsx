import { VerifiedIcon, ErrorIcon } from "../../../assets/Icons";

interface IOrder {
  id: string;
  imageUrl: string;
  orderNo: number;
  date: string;
  orderStatus: string;
  price: string;
  currency: string;
  paymentMethod: string;
}

interface IOrderFC {
  order: IOrder;
}

const Order = ({ order }: IOrderFC) => {
  const {
    imageUrl,
    currency,
    orderNo,
    date,
    orderStatus,
    price,
    paymentMethod,
  } = order;

  const orderStatusHandler = () => {
    let icon = null;
    let text = "";
    if (orderStatus === "completed") {
      icon = <VerifiedIcon width={25} height={25} />;
      text = "Order completed";
    }

    if (orderStatus === "failed") {
      icon = <ErrorIcon width={25} height={25} />;
      text = "Order failed";
    }

    if (orderStatus === "preparing") {
      text = "Preparing";
    }

    return (
      <>
        <div className="icon-wrapper">{icon}</div>
        <span className="hidden mx-2 lg:block">{text}</span>
      </>
    );
  };

  return (
    <div className="flex justify-between items-center w-full border rounded-md p-4 text-gray-700">
      <div className="">
        <div>
          <div className="w-20 h-20 lg:w-20 h:-20 rounded-full overflow-hidden flex justify-center items-center">
            {/* <img src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg" /> */}
            <img alt="order_image" src={imageUrl} />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-2">
          <span className="text-xs mr-2">Order No</span>
          <span className="text-black font-bold">{orderNo}</span>
        </div>
        <div className="text-xs">{date}</div>
      </div>

      <div className="flex">{orderStatusHandler()}</div>
      <div className="hidden w-3/12 md:flex flex-col items-center">
        <div>
          {price} {currency}
        </div>
        <div>{paymentMethod}</div>
      </div>
      {/* <div className="flex justify-center">
        <button className="p-2 border rounded-md">d</button>
      </div> */}
    </div>
  );
};

export default Order;
