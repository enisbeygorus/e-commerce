import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";

const Category = () => {
  const { categoryName } = useParams();

  useEffect(() => {}, [categoryName]);
  return <Products />;
};

export default Category;
