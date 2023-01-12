import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer";

import Home from "../../screens/Home";
import Products from "../../screens/Products";
import ProductSingle from "../../screens/ProductSingle";
import Cart from "../../screens/Cart";
import Category from "../../screens/Category";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="text-gray-700">
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/:name`} element={<Products />} />
          <Route path={`/cart`} element={<Cart />} />
          <Route path={`/products/:productName`} element={<ProductSingle />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
