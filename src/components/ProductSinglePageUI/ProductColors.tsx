import { useState } from "react";

const ProductColors = () => {
  const [selectedColorId, setSelectedColorId] = useState(0);

  const selectColorHandler = (id: number) => {
    if (id === undefined) return;
    setSelectedColorId(id);
  };

  const colorsData = [
    {
      id: 0,
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      id: 1,
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-seritli-orme-yarim-fermuar-overs-df3bfd.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-seritli-orme-yarim-fermuar-overs-df3bfd.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
  ];

  const colorsList = colorsData.map((colorData, index) => {
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
