import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer";

import Home from "../../screens/Home";
import Products from "../../screens/Products";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/products`} element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
