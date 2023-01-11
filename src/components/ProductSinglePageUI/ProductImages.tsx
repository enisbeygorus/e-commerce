const ProductImages = () => {
  return (
    <div className="mb-2 flex flex-col md:m-0 md:flex-row">
      <div className="hidden w-32 px-4 md:block">
        <div className="flex-1">
          <img
            alt="product_image_select"
            className="w-full h-full"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 px-4">
        <div className="">
          <img
            alt="product_image_show"
            className="w-full h-full"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
