interface IProductProperties {
  name: string;
  value: string;
}

export interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
  avaibleSizes: Array<string>;
  avaibleColors: Array<string>;
  categoryName: string;
  clotheModel: string;
  discountPrice: string;
  isFavorite: boolean;
  currency: string;
  deliverTime: string;
  productDescription: string;
  productProperties: Array<IProductProperties>;
  stock: number;
}

export type IProductDetail = Pick<
  IProduct,
  "title" | "price" | "currency" | "discountPrice" | "isFavorite"
> & { discountPercentangeNumber: number };

/////

export type ICartItem = Pick<
  IProduct,
  "id" | "title" | "price" | "currency" | "discountPrice"
> & { color: string; size: string };
