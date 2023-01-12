import { Link } from "react-router-dom";

interface IProductImage {
  imageUrl?: string;
  showAddCard: boolean;
}

const ProductImage = ({ imageUrl, showAddCard }: IProductImage) => {
  const stringToNavigate =
    "/products/Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
      .split(" ")
      .join("-");

  return (
    <div
      style={{ aspectRatio: "1 / 1.5" }}
      className="flex-1 relative flex justify-center items-center rounded-md bg-gray-200"
    >
      <Link
        className="h-full flex justify-center items-center"
        to={stringToNavigate}
      >
        <div className="max-w-full rounded-md overflow-hidden">
          <img
            className="resimOrginal w-full h-full owl-lazy"
            src={imageUrl}
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
