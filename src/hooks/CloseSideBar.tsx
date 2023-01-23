import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IusecloseSideBar {
  toggleSideBarHandler: (value?: boolean) => void;
}

function CloseSideBar({ toggleSideBarHandler }: IusecloseSideBar) {
  const { pathname } = useLocation();

  useEffect(() => {
    toggleSideBarHandler(false);
  }, [pathname, toggleSideBarHandler]);

  return null;
}

export default CloseSideBar;
