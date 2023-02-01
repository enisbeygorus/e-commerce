interface IProfileLinks {
  displayName: string;
  value: string;
  path: string;
}

export const profileLinks: Array<IProfileLinks> = [
  { displayName: "Orders", value: "orders", path: "/profile/orders" },
  { displayName: "Favorites", value: "favorites", path: "/profile/favorites" },
  { displayName: "Adresses", value: "addresses", path: "/profile/addresses" },
  { displayName: "Log out", value: "logout", path: "" },
];
