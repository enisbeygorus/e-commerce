import NavigationLink from "./NavigationLink";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "../../assets/Icons";
import CartItems from "../CartUI/CartItems";
import SearchBar from "../SearchBar/SearchBar";
const Header = () => {
  const numberOfCartItems = 0;

  const numberOfCartHandler = (value: number) => {
    let text = "" + value;
    if (value > 9) {
      text = "";
      text = "9+";
    }
    return text;
  };

  return (
    <header>
      <div className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-stretch mx-auto max-w-screen-xl h-full">
          <a href="/" className="flex items-center">
            {/* <img
              src=""
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              eCommerce
            </span>
          </a>
          <div className=" order-3 mt-4 basis-full md:mt-0 md:basis-0 md:order-none w-full  flex justify-end flex-1  px-2">
            <div className="w-full md:w-auto">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <div className="cursor-pointer text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              Log in
            </div>
            <div
              id="header-cart-button-wrapper"
              className="relative z-30 cursor-pointer text-gray-800 dark:text-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <Link aria-label="cart" to="/cart">
                <div className="flex justify-center items-center">
                  <div className="relative">
                    <ShoppingCartIcon width={20} height={20} className="mr-2" />
                  </div>
                  {/* <span className="mr-2 hidden sm:block">Cart</span> */}
                  {numberOfCartItems !== 0 ? (
                    <span className="flex justify-center items-center w-5 h-5 rounded-full text-white bg-red-500 ">
                      {numberOfCartHandler(numberOfCartItems)}
                    </span>
                  ) : null}
                </div>
              </Link>
              <div
                id="header-cart-items-popup"
                // style={{ width: "500px" }}
                className="hidden absolute right-0 top-full bg-white pt-2 rounded-md"
              >
                <div className="border-2 rounded-md h-full max-h-[24rem] overflow-auto">
                  <CartItems isHeaderPopup={true} />
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-1"
          ></div>
        </div>
      </div>
      <div className="border-b border-gray-200 mb-4 pb-2">
        <nav>
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row  lg:mt-0">
              <li>
                <NavigationLink id="0" text="Discount" value="/discount" />
              </li>
              <li>
                <NavigationLink id="1" text="New Season" value="/new-season" />
              </li>
              <li>
                <NavigationLink id="2" text="Man" value="/man" />
              </li>
              <li>
                <NavigationLink id="3" text="Woman" value="/woman" />
              </li>
              <li>
                <NavigationLink id="4" text="Sweatshirt" value="/sweatshirt" />
              </li>
              <li>
                <NavigationLink id="5" text="Shoes" value="/shoes" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
