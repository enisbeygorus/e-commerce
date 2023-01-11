import Product from "../components/Product/Product";
import Filters from "../components/Filters/Filters";
import Sort from "../components/Sort/Sort";

const Products = () => {
  const productContent = Array.from(Array(6).keys()).map((data, index) => {
    const imageUrl1 =
      "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg";
    const imageUrl2 =
      "https://st2.myideasoft.com/idea/jq/35/myassets/products/076/8508228a-08b0-4f95-a124-05ed5e80e721.jpg?revision=1645306292";
    let imageUrl = index % 2 ? imageUrl1 : imageUrl2;

    return (
      <div key={index} className="flex w-1/2 md:w-1/3 p-4">
        <Product imageUrl={imageUrl} />
      </div>
    );
  });
  return (
    <div className="w-11/12 max-w-[1250px] m-auto">
      <div className="content flex w-full">
        <div className="hidden lg:block w-52 filter">
          <Filters />
        </div>
        <div className="products flex-1">
          <div className="flex justify-end pr-4">
            <Sort />
          </div>
          <div className="flex flex-wrap">{productContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
