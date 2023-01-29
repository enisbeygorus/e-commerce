import { useCallback, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar/Sidebar";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";

import ScrollToTop from "../../hooks/useScrollTop";
import CloseSideBar from "../../hooks/CloseSideBar";

import { externalRoutes, internalRoutes } from "../../routes";
import { useSelector } from "react-redux";
import { ACTION_SELECTORS } from "../../store/actionSelectors";
import { getLocal, LOCAL_STORAGE_SELECTORS } from "../../utils/localStorage";

// import Category from "../../screens/Category";

const Layout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { user } = useSelector(ACTION_SELECTORS.getUser);

  const toggleSideBarHandler = useCallback((value?: boolean) => {
    if (value !== undefined && typeof value === "boolean") {
      setShowSideBar(value);
      return;
    }
    setShowSideBar((prev) => !prev);
  }, []);

  const navigateLogin = () => {
    if (user || getLocal(LOCAL_STORAGE_SELECTORS.user)) {
      return false;
    }

    return true;
  };

  return (
    <div className="text-gray-700">
      <CloseSideBar toggleSideBarHandler={toggleSideBarHandler} />
      <ScrollToTop />
      <Sidebar
        showSideBar={showSideBar}
        toggleSideBarHandler={toggleSideBarHandler}
      />
      <Header toggleSideBarHandler={toggleSideBarHandler} />
      <BreadCrumbs />
      <div>
        <Routes>
          {externalRoutes.map((routeObj) => {
            return (
              <Route
                key={routeObj.path}
                path={routeObj.path}
                element={<routeObj.component />}
              />
            );
          })}
          {internalRoutes.map((routeObj) => {
            return (
              <Route
                key={routeObj.path}
                path={routeObj.path}
                element={
                  !navigateLogin() ? (
                    <routeObj.component />
                  ) : (
                    <Navigate to="/login" replace={true} />
                  )
                }
              />
            );
          })}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
