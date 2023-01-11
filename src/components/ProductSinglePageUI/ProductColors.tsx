const ProductColors = () => {
  const colorsData = [
    {
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-seritli-orme-yarim-fermuar-overs-df3bfd.jpg",
    },
    {
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-seritli-orme-yarim-fermuar-overs-df3bfd.jpg",
    },
    {
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
  ];

  const colorsList = colorsData.map((colorData, index) => {
    return (
      <li
        className="mr-4 rounded-md overflow-hidden cursor-pointer"
        key={index}
      >
        <div className="w-20 aspect-auto">
          <img alt="color_item" src={colorData.imageUrl} />
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
