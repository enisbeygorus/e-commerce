import { Link } from "react-router-dom";
import { IProduct } from "../../types";

export type IProductImage = Pick<IProduct, "imageUrls" | "productUrl"> & {
  showAddCard: boolean;
};

const ProductImage = ({
  productUrl,
  imageUrls,
  showAddCard,
}: IProductImage) => {
  const stringToNavigate = `/products/${productUrl}`;

  const aspectRation = "1 / 1.3";

  return (
    <div
      style={{ aspectRatio: aspectRation }}
      className="overflow-hidden relative flex justify-center items-center rounded-md bg-gray-200"
    >
      <Link
        className="h-full flex justify-center items-center"
        to={stringToNavigate}
      >
        <div className="max-w-full rounded-md overflow-hidden">
          <img
            draggable={false}
            className="resimOrginal w-full h-auto owl-lazy"
            src={imageUrls[0]}
            data-src="/Uploads/UrunResimleri/thumb/erkek-gri-orme-yarim-fermuar-oversize--ee4-0f.jpg"
            alt="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
          />
        </div>
      </Link>
      {showAddCard ? (
        <div className="absolute bottom-0 w-full addToCard flex">
          <div
            id="product-add-to-card-hover"
            title="Add To Card"
            className="w-full font-bold text-gray-200 h-0 bg-gray-700 overflow-hidden flex flex-col justify-center items-center cursor-pointer"
          >
            <div>Add To Card</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductImage;
