import { ISizes } from "../../types";

interface ISizesComponent {
  sizeSelectHandler: (value: string) => void;
  sizeSelected: string;
  sizes: ISizes;
}

const Sizes = ({ sizeSelectHandler, sizeSelected, sizes }: ISizesComponent) => {
  const content = sizes.allProductSizes.map((size, index) => {
    const isSizeAvaible = sizes.availableSizes.indexOf(size) !== -1;

    return (
      <div
        key={index}
        onClick={() => sizeSelectHandler(size)}
        className={`${
          size === sizeSelected ? "border-green-400" : "border-gray-500"
        } uppercase text-center border-2 rounded-md w-7 h-7 mr-2   ${
          !isSizeAvaible
            ? "bg-gray-500 text-black"
            : "hover:border-green-400 cursor-pointer"
        }`}
      >
        {size}
      </div>
    );
  });
  return (
    <div className="flex flex-col items-start mb-8">
      <h4 className="font-bold mb-2">Size</h4>
      <div className="flex">{content}</div>
    </div>
  );
};

export default Sizes;
