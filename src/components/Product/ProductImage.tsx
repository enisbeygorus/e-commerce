const ProductImage = () => {
  return (
    <div className="productImage relative">
      <a
        className="detailLink detailUrl"
        data-id="525"
        title="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
        href="/erkek-gri-orme-yarim-fermuar-oversize-sweatshirt"
      >
        <div className="max-w-full rounded-md overflow-hidden">
          <img
            className="resimOrginal owl-lazy"
            src="https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg"
            data-src="/Uploads/UrunResimleri/thumb/erkek-gri-orme-yarim-fermuar-oversize--ee4-0f.jpg"
            alt="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
          />
        </div>
      </a>
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
