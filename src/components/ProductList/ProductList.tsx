import { useState, useEffect } from "react";
import Product from "../Product/Product";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";
import { productsData } from "../../database";
const ProductList = () => {
  const [products, setProducts] = useState(new Array(6).fill(null));

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 1000);
  }, []);

  const content = products.map((product, index) => {
    return (
      <div key={index} className="flex w-1/2 md:w-1/3 p-2 sm:p-4">
        <Product product={product} />
      </div>
    );
  });

  return (
    <div className="w-full px-2 md:w-11/12 max-w-[1250px] m-auto">
      <div className="content flex w-full">
        <div className="hidden lg:block w-52 filter">
          <Filters />
        </div>
        <div className="products flex-1">
          <div className="flex justify-end pr-4">
            <Sort />
          </div>
          <div className="flex flex-wrap">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
