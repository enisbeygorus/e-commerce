interface IProductCore {
  id: number;
  title: string;
  price: string;
  currency: string;
  discountPrice: string;
  isFavorite: boolean;
}

interface IProductProperties {
  name: string;
  value: string;
}

export interface IProductDetail {
  title: string;
  price: string;
  currency: string;
  discountPrice: string;
  discountPercentangeNumber: number;
  isFavorite: boolean;
}

export interface IProduct extends IProductCore {
  imageUrl: string;
  avaibleSizes: Array<string> | [];
  avaibleColors: Array<string> | [];
  categoryName: string;
  clotheModel: string;
  deliverTime: string;
  productDescription: string;
  productProperties?: Array<IProductProperties> | [] | null;
  stock: number;
}

export interface IProductComponent {
  product: IProduct;
}
