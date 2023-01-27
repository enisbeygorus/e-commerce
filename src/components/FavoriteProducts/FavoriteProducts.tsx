import { useEffect, useState } from "react";
import { productsData } from "../../database";
import { IProduct } from "../../types";
import ProductList from "../ProductList/ProductList";

const FavoriteProducts = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Array<IProduct>>([]);
  useEffect(() => {
    setTimeout(() => {
      const filteredFavoriteProducts = productsData.filter(
        (product) => product.isFavorite
      );

      setFavoriteProducts(filteredFavoriteProducts);
    });
  }, []);

  return <ProductList showFilters={false} productsData={favoriteProducts} />;
};

export default FavoriteProducts;
