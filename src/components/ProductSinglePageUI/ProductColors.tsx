import { IAvailableColors, IProductColor } from "../../types";
import { Link } from "react-router-dom";

interface IProductColors {
  availableColors: Array<IAvailableColors>;
  colorSelectedProductId: IProductColor;
  setColorSelectedProductId: (id: string) => void;
}

const ProductColors = ({
  colorSelectedProductId,
  setColorSelectedProductId,
  availableColors,
}: IProductColors) => {
  if (availableColors.length === 0) {
    return null;
  }
  const selectColorHandler = (id: string) => {
    if (id === "") return;
    setColorSelectedProductId(id);
  };

  const colorsList = availableColors.map((colorData, index) => {
    return (
      <Link key={index} to={"/products/" + colorData.productUrl}>
        <li className="mr-4 overflow-hidden cursor-pointer">
          <div
            onClick={() => selectColorHandler(colorData.productId)}
            className={`${
              colorData.productId === colorSelectedProductId
                ? "border-green-700"
                : "border-transparent"
            } w-20 aspect-auto p-1 border-4 rounded-md`}
          >
            <img
              className="rounded-md"
              alt="color_item"
              src={colorData.imageUrl}
            />
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div className="mb-8">
      <h4 className="font-bold mb-2 text-left">Color</h4>
      <div className="flex flex-col items-start w-full overflow-x-auto pr-2 pb-2">
        <ul className="flex">{colorsList}</ul>
      </div>
    </div>
  );
};

export default ProductColors;
