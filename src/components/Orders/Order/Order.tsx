import { VerifiedIcon } from "../../../assets/Icons";

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

  return (
    <div className="flex justify-center items-center w-full border rounded-md p-4 text-gray-700">
      <div className="w-2/12">
        <div>
          <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center">
            {/* <img src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg" /> */}
            <img src={imageUrl} />
          </div>
        </div>
      </div>
      <div className="w-3/12">
        <div className="mb-2">
          <span className="text-xs mr-2">Order No</span>
          <span className="text-black font-bold">{orderNo}</span>
        </div>
        <div className="text-xs">{date}</div>
      </div>

      <div className="w-3/12 flex">
        <div className="mr-1 flex items-center">
          <VerifiedIcon width={25} height={25} />
        </div>
        {orderStatus === "completed" ? (
          <span>Order completed</span>
        ) : (
          <span>Order failed</span>
        )}
      </div>
      <div className="w-3/12 flex flex-col items-center">
        <div>
          {price} {currency}
        </div>
        <div>{paymentMethod}</div>
      </div>
      <div className="w-1/12 flex justify-center">
        <button className="p-2 border rounded-md">d</button>
      </div>
    </div>
  );
};

export default Order;
