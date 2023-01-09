import { HeartIcon } from "../../assets/Icons";
import { isMobile } from "../../utils";

const ProductIcon = () => {
  return (
    <div className="productIcon cursor-pointer">
      <div className="favori block absolute right-0 bottom-0">
        <a
          //   onclick="productFavoritesProcess('31e3c0553e1d421293c3b3e03535b94a',-1,2,525,2765,1,this)"
          //   onload="urunfavoriKontrol(this,525)"
          data-action="1"
          data-favoritepopup="true"
          className="favoriteslist "
          title="Favorilere Ekle"
        >
          <HeartIcon width={25} height={25} />
        </a>
      </div>

      <div className="examineIcon tip detailLink hidden" title="Ürünü İncele">
        <a
          href="/erkek-gri-orme-yarim-fermuar-oversize-sweatshirt"
          className="detailUrl"
          data-id="525"
        >
          Ürünü İncele
        </a>
      </div>
      <div className="newIcon tip hidden" title="Yeni Ürün">
        Yeni Ürün
      </div>
    </div>
  );
};

export default ProductIcon;
