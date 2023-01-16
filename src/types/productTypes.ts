interface IProductProperties {
  name: string;
  value: string;
}

export type IProductColor = string;

export interface IAvailableColors {
  id: string;
  productId: string;
  colorName: IProductColor;
  productUrl: string;
  imageUrl: string;
}

export interface ISizes {
  allProductSizes: Array<string>;
  availableSizes: Array<string>;
}

export interface IProduct {
  id: string;
  productUrl: string;
  title: string;
  imageUrls: Array<string>;
  price: string;
  sizes: ISizes;
  availableColors: Array<IAvailableColors>;
  categoryName: string;
  clotheModel: string;
  discountPrice: string;
  isFavorite: boolean;
  currency: string;
  deliverTime: string;
  productDescription: string;
  productProperties: Array<IProductProperties>;
  stockAmount: number;
  stockType: string;
  brandName?: string;
  brandId?: string;
  brandImageUrl?: string;
  tax: number;
}

export type IProductDetail = Pick<
  IProduct,
  "title" | "price" | "currency" | "discountPrice" | "isFavorite"
> & { discountPercentangeNumber: number };

/////

export type ICartItem = Pick<
  IProduct,
  "id" | "title" | "price" | "currency" | "discountPrice" | "productUrl"
> & { color: string; size: string; amount: number };
