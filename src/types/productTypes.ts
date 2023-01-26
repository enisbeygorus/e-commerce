interface IProductProperties {
  name: string;
  value: string;
}

export type IProductColor = string;

export interface IAvailableColors {
  productId: string;
  colorName: IProductColor;
  productUrl: string;
  imageUrl: string;
}

export interface ISizes {
  allProductSizes: Array<string>;
  availableSizes: Array<string>;
}

export interface IProductCore {
  id: string;
  productUrl: string;
  title: string;
  imageUrls: Array<string>;
  price: string;
  discountPrice: string;
}

export interface IProduct extends IProductCore {
  sizes: ISizes;
  availableColors: Array<IAvailableColors>;
  categoryName: string;
  clotheModel: string;
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
  "title" | "price" | "currency" | "discountPrice" | "productUrl"
> & { id: string; color: string; size: string; amount: number };
