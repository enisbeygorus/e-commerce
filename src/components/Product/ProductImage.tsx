import { Link } from "react-router-dom";

const ProductImage = () => {
  const stringToNavigate =
    "/products/Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
      .split(" ")
      .join("-");
  return (
    <div className="productImage relative">
      <Link to={stringToNavigate}>
        <div className="max-w-full rounded-md overflow-hidden">
          <img
            className="resimOrginal w-full h-full owl-lazy"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
            data-src="/Uploads/UrunResimleri/thumb/erkek-gri-orme-yarim-fermuar-oversize--ee4-0f.jpg"
            alt="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
          />
        </div>
      </Link>
      <div className="addToCard flex">
        <div
          id="product-add-to-card-hover"
          title="Add To Card"
          className="w-full absolute bottom-0 font-bold text-gray-700 bg-gray-200 h-0 overflow-hidden flex justify-center items-center cursor-pointer"
        >
          Add To Card
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
