import { ProductModel } from 'src/app/Models/store/product.model';

export interface CartModel {
  id: number,
  userId: number,
  date: string,
  products: ProductModel[]
}
