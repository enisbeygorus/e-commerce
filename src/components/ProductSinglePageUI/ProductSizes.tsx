interface ISizes {
  sizeSelectHandler: (value: number) => void;
  sizeSelected: number;
}

const Sizes = ({ sizeSelectHandler, sizeSelected }: ISizes) => {
  const sizes = [
    { displayName: "S", value: 0 },
    { displayName: "M", value: 1 },
    { displayName: "L", value: 2 },
    { displayName: "XL", value: 3 },
  ];

  return (
    <div className="flex flex-col items-start mb-8">
      <h4 className="font-bold mb-2">Size</h4>
      <div className="flex">
        {sizes.map((size) => (
          <div
            key={size.value}
            onClick={() => sizeSelectHandler(size.value)}
            className={`${
              size.value === sizeSelected ? "border-green-400" : ""
            } text-center border-2 rounded-md w-7 h-7 mr-2 cursor-pointer hover:border-green-400`}
          >
            {size.displayName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
