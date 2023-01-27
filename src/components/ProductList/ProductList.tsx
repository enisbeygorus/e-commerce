import { useState, useEffect } from "react";
import Product from "../Product/Product";
import Filters from "../Filters/Filters";
import Sort from "../Sort/Sort";

import { IProduct } from "../../types";

interface IProductList {
  productsData: Array<IProduct | null>;
}

const ProductList = ({ productsData }: IProductList) => {
  const [products, setProducts] = useState<Array<IProduct | null>>(
    new Array(6).fill(null)
  );

  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  const contentHandler = () => {
    if (products.length === 0) {
      return (
        <div className="text-center m-4 w-full ">
          <div className="border-2 border-gray-400 p-4 rounded-md">
            Products not found
          </div>
        </div>
      );
    }
    return products.map((product, index) => {
      return (
        <div key={index} className="flex w-1/2 md:w-1/3 p-2 sm:p-4">
          <Product product={product} />
        </div>
      );
    });
  };

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
          <div className="flex flex-wrap">{contentHandler()}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
