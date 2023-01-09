import Product from "../components/Product/Product";
import Filters from "../components/Filters/Filters";
import Sort from "../components/Sort/Sort";

const Products = () => {
  const productContent = Array.from(Array(10).keys()).map((data, index) => {
    return (
      <div key={index} className="flex w-1/2 md:w-1/3 p-4">
        <Product />
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
