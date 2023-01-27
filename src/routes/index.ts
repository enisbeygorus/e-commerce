import Home from "../screens/Home";
import Products from "../screens/Products";
import ProductSingle from "../screens/ProductSingle";
import Cart from "../screens/Cart";
import Authetication from "../screens/Authetication";
import Profile from "../screens/Profile";

export const externalRoutes = [
  {
    path: "/", // the url
    component: Home, // view rendered
  },
  {
    path: "/cart", // the url
    component: Cart, // view rendered
  },
  {
    path: "/login", // the url
    component: Authetication, // view rendered
  },
  {
    path: "/products/:productName", // the url
    component: ProductSingle, // view rendered
  },
  {
    path: "/:name", // the url
    component: Products, // view rendered
  },
];

export const internalRoutes = [
  {
    path: "/profile", // the url
    component: Profile, // view rendered
  },
  {
    path: "/profile/:profileTab", // the url
    component: Profile, // view rendered
  },
];
