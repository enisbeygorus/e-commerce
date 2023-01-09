import { HeartIcon } from "../../assets/Icons";
const ProductDetail = () => {
  return (
    <div className="productDetail mb-2" data-id="525" data-variant-id="2765">
      <div className="productMarka hidden">SLATRA</div>
      <div className="productName my-3 w-full" data-id="525">
        <a
          className="flex text-left overflow-hidden text-ellipsis text-sm h-10 w-full text-black"
          title="Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt"
          href="/erkek-gri-orme-yarim-fermuar-oversize-sweatshirt"
        >
          Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt
        </a>
      </div>
      <div className="productPoints hidden">
        <div className="rating" data-rating="0">
          <i className="star-1">★</i>
          <i className="star-2">★</i>
          <i className="star-3">★</i>
          <i className="star-4">★</i>
          <i className="star-5">★</i>
        </div>
      </div>
      <div className="productStokKodu hidden">
        <span>S1019</span>
      </div>
      <div className="productSatisBirimi hidden">
        <span>ADET</span>
      </div>
      <div className="productPrice flex">
        <div className="discountPrice flex flex-1">
          <span className="text-xl font-bold">₺399,99</span>
          <span className="discountKdv hidden">KDV Dahil</span>
        </div>

        <div
          //   onclick="productFavoritesProcess('31e3c0553e1d421293c3b3e03535b94a',-1,2,525,2765,1,this)"
          //   onload="urunfavoriKontrol(this,525)"
          data-action="1"
          data-favoritepopup="true"
          className="favoriteslist cursor-pointer"
          title="Favorilere Ekle"
        >
          <HeartIcon width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
