import { Link } from "react-router-dom";
import Section from "../Section/Section";
import "./BreadCrumbs.css";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  if (
    pathname === "/" ||
    pathname === "/cart" ||
    pathname === "/authetication"
  ) {
    return null;
  }

  const splittedPathName = pathname.split("/");

  const breadCrumbsContentHandler = () => {
    return (
      <>
        <Link to="/">
          <div className="mr-1">Main Menu /</div>
        </Link>
        <Link to={`/${splittedPathName[1]}`}>
          <div className="mr-1">{splittedPathName[1]} /</div>
        </Link>
        {splittedPathName.length > 2 ? (
          <div>{decodeURI(splittedPathName[2])} </div>
        ) : null}
      </>
    );
  };

  return (
    <Section maxWidth="max-w-[1250px]" className="mb-2">
      <div className="px-4 w-full">
        <div className="breadcrumbs flex whitespace-nowrap overflow-x-auto w-full pb-2  justify-start text-xs">
          {breadCrumbsContentHandler()}
        </div>
      </div>
    </Section>
  );
};

export default BreadCrumbs;
