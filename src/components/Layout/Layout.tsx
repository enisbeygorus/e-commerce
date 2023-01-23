import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar/Sidebar";

import Home from "../../screens/Home";
import Products from "../../screens/Products";
import ProductSingle from "../../screens/ProductSingle";
import Cart from "../../screens/Cart";

import ScrollToTop from "../../hooks/useScrollTop";
import CloseSideBar from "../../hooks/CloseSideBar";

// import Category from "../../screens/Category";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBarHandler = useCallback((value?: boolean) => {
    if (value !== undefined && typeof value === "boolean") {
      setShowSideBar(value);
      return;
    }
    setShowSideBar((prev) => !prev);
  }, []);

  return (
    <div className="text-gray-700">
      <CloseSideBar toggleSideBarHandler={toggleSideBarHandler} />
      <ScrollToTop />
      <Sidebar
        showSideBar={showSideBar}
        toggleSideBarHandler={toggleSideBarHandler}
      />
      <Header toggleSideBarHandler={toggleSideBarHandler} />
      <div>
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
