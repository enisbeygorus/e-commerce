import { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import { productsData } from "../database";
import { IProduct } from "../types";

const Products = () => {
  const [products, setProducts] = useState<Array<IProduct | null>>(
    new Array(6).fill(null)
  );

  useEffect(() => {
    setTimeout(() => {
      setProducts(productsData);
    }, 100);
  }, [productsData]);

  return <ProductList productsData={products} />;
};

export default Products;
