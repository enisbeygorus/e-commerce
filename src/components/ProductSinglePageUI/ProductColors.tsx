import { useState } from "react";
import { IAvailableColors } from "../../types";

interface IProductColors {
  availableColors: Array<IAvailableColors>;
}

const ProductColors = ({ availableColors }: IProductColors) => {
  const [selectedColorId, setSelectedColorId] = useState<string>("0");

  const selectColorHandler = (id: string) => {
    if (id === "") return;
    setSelectedColorId(id);
  };

  const colorsList = availableColors.map((colorData, index) => {
    return (
      <li className="mr-4  overflow-hidden cursor-pointer" key={index}>
        <div
          onClick={() => selectColorHandler(colorData.id)}
          className={`${
            colorData.id === selectedColorId
              ? "border-green-400"
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
