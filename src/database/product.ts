import { IProduct } from "../types/index";

export const productDataInitial: IProduct = {
  id: "",
  title: "",
  imageUrls: [""],
  price: "",
  productUrl: "",
  sizes: { allProductSizes: [""], availableSizes: [""] },
  availableColors: [
    { productId: "123", colorName: "", productUrl: "", imageUrl: "" },
  ],
  categoryName: "",
  clotheModel: "",
  discountPrice: "",
  isFavorite: true,
  currency: "",
  deliverTime: "",
  productDescription: "",
  productProperties: [],
  stockAmount: 0,
  stockType: "adet",
  tax: 8,
};

export const productData: IProduct = {
  id: "0",
  title: "Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt",
  imageUrls: [
    "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
  ],
  productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
  price: "250.55",
  sizes: { allProductSizes: ["s", "m", "l", "xl"], availableSizes: ["m", "l"] },
  availableColors: [
    {
      colorName: "black",
      productId: "123",
      productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      productId: "123",
      colorName: "yeşil",
      productUrl: "erkek-seritli-orme-yarim-fermuar-oversize-sweatshirt",
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-seritli-orme-yarim-fermuar-overs-df3bfd.jpg",
    },
  ],
  categoryName: "üst giyim",
  clotheModel: "gömlek",
  discountPrice: "195.50",
  isFavorite: true,
  currency: "TL",
  deliverTime: "2 Gün",
  productDescription: "",
  productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
  stockAmount: 0,
  stockType: "adet",
  tax: 8,
};

export const productsData: Array<IProduct> = [
  {
    id: "0",
    title: "Man Red Jacket Regular Fit Lightweight",
    imageUrls: [
      "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10513998-stock-photo-red-jacket.jpg",
      "https://st2.depositphotos.com/1766687/9912/i/950/depositphotos_99124724-stock-photo-red-jacket-on-a-white.jpg",
    ],
    price: "250.55",
    productUrl: "man-red-jacket-regular-fit-lightweight",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["s", "m", "l"],
    },
    availableColors: [
      {
        productId: "123",
        colorName: "black",
        productUrl: "man-red-jacket-regular-fit-lightweight",
        imageUrl:
          "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10513998-stock-photo-red-jacket.jpg",
      },
      {
        productId: "143",
        colorName: "black",
        productUrl: "man-green-jacket-regular-fit-lightweight",
        imageUrl:
          "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10514033-stock-photo-green-jacket.jpg",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "gömlek",
    discountPrice: "195.50",
    isFavorite: true,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 0,
    stockType: "adet",
    tax: 8,
  },
  {
    id: "1",
    title: "Female Blue Wool Jacket",
    imageUrls: [
      "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    productUrl: "female-blue-wool-jacket",
    price: "250.55",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["s", "m", "l"],
    },
    availableColors: [
      {
        productId: "1",
        colorName: "blue",
        productUrl: "female-blue-wool-jacket",
        imageUrl:
          "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "sweatshirt",
    discountPrice: "0",
    isFavorite: false,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 3,
    stockType: "adet",
    tax: 8,
  },
  {
    id: "2",
    title: "Man Green Jacket Regular Fit Lightweight",
    imageUrls: [
      "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10514033-stock-photo-green-jacket.jpg",
    ],

    price: "250.55",
    productUrl: "man-green-jacket-regular-fit-lightweight",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        productId: "123",
        colorName: "black",
        productUrl: "man-green-jacket-regular-fit-lightweight",
        imageUrl:
          "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10514033-stock-photo-green-jacket.jpg",
      },
      {
        productId: "145",
        colorName: "black",
        productUrl: "man-red-jacket-regular-fit-lightweight",
        imageUrl:
          "https://static8.depositphotos.com/1559986/1051/i/950/depositphotos_10513998-stock-photo-red-jacket.jpg",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "sweatshirt",
    discountPrice: "0",
    isFavorite: false,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 10,
    stockType: "adet",
    tax: 8,
  },
  {
    id: "3",
    title: "Man Classic Blue Jacket Suit",
    imageUrls: [
      "https://st2.depositphotos.com/4826769/7626/i/950/depositphotos_76267371-stock-photo-mens-jacket-isolated-on-white.jpg",
      "https://st2.depositphotos.com/4826769/7843/i/950/depositphotos_78439416-stock-photo-mens-jacket-isolated-on-white.jpg",
    ],
    price: "250.55",
    productUrl: "man-classic-blue-jacket-suit",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        productId: "123",
        colorName: "black",
        productUrl: "man-classic-blue-jacket-suit",
        imageUrl:
          "https://st2.depositphotos.com/4826769/7626/i/950/depositphotos_76267371-stock-photo-mens-jacket-isolated-on-white.jpg",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "gömlek",
    discountPrice: "195.50",
    isFavorite: true,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 0,
    stockType: "adet",
    tax: 8,
  },
  {
    id: "4",
    title: "Man Black Fit Leather Jacket",
    imageUrls: [
      "https://static4.depositphotos.com/1013245/356/i/950/depositphotos_3561159-stock-photo-luxuru-black-leather-jacket-isolated.jpg",
      "https://st4.depositphotos.com/1226172/21801/i/1600/depositphotos_218019568-stock-photo-mens-black-leather-jacket-isolated.jpg",
    ],
    price: "250.55",
    productUrl: "man-black-fit-leather-sweatshirt",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        productId: "123",
        colorName: "black",
        productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
        imageUrl:
          "https://static4.depositphotos.com/1013245/356/i/950/depositphotos_3561159-stock-photo-luxuru-black-leather-jacket-isolated.jpg",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "gömlek",
    discountPrice: "195.50",
    isFavorite: true,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 0,
    stockType: "adet",
    tax: 8,
  },
  {
    id: "4",
    title: "Woman Purple Classic Long Jacket",
    imageUrls: [
      "https://st2.depositphotos.com/2019997/12352/i/950/depositphotos_123521316-stock-photo-wool-topcoat-isolated.jpg",
    ],
    price: "250.55",
    productUrl: "woman-purple-classic-long-jacket",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        productId: "123",
        colorName: "black",
        productUrl: "woman-purple-classic-long-jacket",
        imageUrl:
          "https://st2.depositphotos.com/2019997/12352/i/950/depositphotos_123521316-stock-photo-wool-topcoat-isolated.jpg",
      },
    ],
    categoryName: "üst giyim",
    clotheModel: "gömlek",
    discountPrice: "195.50",
    isFavorite: true,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 0,
    stockType: "adet",
    tax: 8,
  },
];
