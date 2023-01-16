import { IProduct } from "../types/index";

export const productDataInitial: IProduct = {
  id: "",
  title: "",
  imageUrls: [""],
  price: "",
  productUrl: "",
  sizes: { allProductSizes: [""], availableSizes: [""] },
  availableColors: [
    { id: "", productId: "123", colorName: "", productUrl: "", imageUrl: "" },
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
      id: "0",
      colorName: "black",
      productId: "123",
      productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
      imageUrl:
        "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    },
    {
      id: "1",
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
    title: "Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt",
    imageUrls: [
      "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
    ],
    price: "250.55",
    productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        id: "0",
        productId: "123",
        colorName: "black",
        productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
        imageUrl:
          "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
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
    title: "Unisex Mavi W ÇıtÇıtlı Oversize Peluş Ceket",
    imageUrls: [
      "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/unisex-mavi-w-citcitli-oversize-pelus--78-f04.jpg",
    ],
    productUrl: "unisex-mavi-w-citcitli-oversize-pelus-ceket",
    price: "250.55",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        id: "0",
        productId: "123",
        colorName: "black",
        productUrl: "Erkek-Gri-Örme-Yarım-Fermuar-Oversize-Sweatshirt",
        imageUrl:
          "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
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
    title: "Unisex Siyah W ÇıtÇıtlı Oversize Peluş Ceket",
    imageUrls: [
      "https://st2.myideasoft.com/idea/jq/35/myassets/products/076/8508228a-08b0-4f95-a124-05ed5e80e721.jpg?revision=1645306292",
    ],

    price: "250.55",
    productUrl: "unisex-beyaz-w-citcitli-oversize-pelus-ceket",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [
      {
        id: "0",
        productId: "123",
        colorName: "black",
        productUrl: "erkek-gri-örme-yarım-fermuar-oversize-sweatshirt",
        imageUrl:
          "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/erkek-acikgri-orme-yarim-fermuar-overs-bbc417.jpg",
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
    title: "Erkek Gri Örme Yarım Fermuar Oversize Sweatshirt",
    imageUrls: [
      "https://www.slatra.com.tr/Uploads/UrunResimleri/thumb/unisex-siyah-w-citcitli-oversize-pelus-dcf114.jpg",
    ],
    price: "250.55",
    productUrl: "unisex-siyah-w-citcitli-oversize-pelus-ceket",
    sizes: {
      allProductSizes: ["s", "m", "l", "xl"],
      availableSizes: ["m", "l"],
    },
    availableColors: [],
    categoryName: "üst giyim",
    clotheModel: "sweatshirt",
    discountPrice: "0",
    isFavorite: false,
    currency: "TL",
    deliverTime: "2 Gün",
    productDescription: "",
    productProperties: [{ name: "kumaş", value: "%100 Pamuk / %100 Cotton" }],
    stockAmount: 20,
    stockType: "adet",
    tax: 8,
  },
];