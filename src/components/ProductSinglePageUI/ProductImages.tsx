import { useEffect, useState } from "react";
import { IProduct } from "../../types";

type IProductImages = Pick<IProduct, "imageUrls">;

const ProductImages = ({ imageUrls }: IProductImages) => {
  const [selectedImage, setSelectedImage] = useState<string>(imageUrls[0]);

  const selectImageHandler = (str: string) => {
    if (str !== selectedImage) {
      setSelectedImage(str);
    }
  };

  useEffect(() => {
    if (imageUrls && imageUrls.length > 0) {
      setSelectedImage(imageUrls[0]);
    }
  }, [imageUrls]);

  return (
    <div className="w-full mb-2 flex flex-col md:m-0 md:flex-row flex-1">
      <div className=" flex justify-center order-2 w-full mb-4 px-2 md:block overflow-y-auto md:aspect-square md:w-32 md:order-none">
        <div className="h-full md:px-2 overflow-auto whitespace-nowrap cursor-pointer">
          {imageUrls.map((imageUrl, index) => {
            return (
              <div
                onClick={() => selectImageHandler(imageUrl)}
                key={index}
                className="inline-block w-16 md:w-full mr-4 md:block md:mb-4 md:mr-0 h-24 border-2 rounded-md"
              >
                <img
                  alt="product_image_select"
                  className="w-full"
                  src={imageUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex mb-4 justify-center items-center flex-1 px-4 sm:py-4 md:mb-0">
        <div style={{ aspectRatio: "1 / 1.3" }} className="overflow-hidden">
          <img
            alt="product_image_show"
            className="w-full"
            src={selectedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
