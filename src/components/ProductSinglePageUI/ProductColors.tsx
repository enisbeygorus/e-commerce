import { IAvailableColors, IProductColor } from "../../types";

interface IProductColors {
  availableColors: Array<IAvailableColors>;
  colorSelected: IProductColor;
  setColorSelected: (id: string) => void;
}

const ProductColors = ({
  colorSelected,
  setColorSelected,
  availableColors,
}: IProductColors) => {
  if (availableColors.length === 0) {
    return null;
  }
  const selectColorHandler = (id: string) => {
    if (id === "") return;
    setColorSelected(id);
  };

  const colorsList = availableColors.map((colorData, index) => {
    return (
      <li className="mr-4  overflow-hidden cursor-pointer" key={index}>
        <div
          onClick={() => selectColorHandler(colorData.id)}
          className={`${
            colorData.id === colorSelected
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
