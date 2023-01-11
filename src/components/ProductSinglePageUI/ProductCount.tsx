interface IProductCount {
  itemCountHandler: (value: number) => void;
  itemCount: number;
}

const ProductCount = ({ itemCountHandler, itemCount }: IProductCount) => {
  return (
    <div className="flex text-gray-700 mb-8">
      <div
        onClick={() => itemCountHandler(-1)}
        className="relative flex justify-center items-center w-8 h-10 border cursor-pointer border-gray-500"
      >
        <span style={{ top: "40%" }} className="text-4xl absolute-center">
          -
        </span>
      </div>
      <div className="text-lg font-bold flex justify-center items-center w-10 h-10 border-y border-gray-500">
        {itemCount}
      </div>
      <div
        onClick={() => itemCountHandler(1)}
        className="relative flex justify-center items-center w-8 h-10 border cursor-pointer border-gray-500"
      >
        <span style={{ top: "40%" }} className="text-3xl absolute-center">
          +
        </span>
      </div>
    </div>
  );
};

export default ProductCount;
