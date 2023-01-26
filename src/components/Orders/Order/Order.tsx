import { VerifiedIcon } from "../../../assets/Icons";
const Order = () => {
  return (
    <div className="flex justify-center items-center w-full border rounded-md p-4 text-gray-700">
      <div className="w-2/12">
        <div>
          <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center">
            <img src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg" />
          </div>
        </div>
      </div>
      <div className="w-3/12">
        <div className="mb-2">
          <span className="text-xs mr-2">Order No</span>
          <span className="text-black font-bold">112233</span>
        </div>
        <div className="text-xs">25/12/2022, 10:20</div>
      </div>

      <div className="w-3/12 flex">
        <div className="mr-1 flex items-center">
          <VerifiedIcon width={25} height={25} />{" "}
        </div>
        <span>Order completed</span>
      </div>
      <div className="w-3/12">
        <div>155,00 TL</div>
        <div>Credit Card</div>
      </div>
      <div className="w-1/12 flex justify-center">
        <button className="p-2 border rounded-md">detail</button>
      </div>
    </div>
  );
};

export default Order;
