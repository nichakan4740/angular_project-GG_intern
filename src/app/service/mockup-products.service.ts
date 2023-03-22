import { Injectable } from '@angular/core';
import products from "./products.json";


export interface Product {
  id: number;
  sku: string;
  title_lang1: string;
  group_id: string;
  group: string;
  disable: boolean;
  productIndex: number;
  check: boolean;
  default:boolean;
  nameProp: string;
  propValueMain: string;
  propValueSub: string;
}


@Injectable({
  providedIn: 'root'
})
export class MockupProductsService {

  constructor() { }

  search(input: { page: number; page_size: number; search: string }): Promise<{ count: number; data: Product[] }> {
    return new Promise((resolve, reject) => {
      const start = (input.page - 1) * input.page_size;
      const end = start + input.page_size;
      const data = input.search
        ? (products as unknown as Product[]).filter(
          (x) =>
            `${x.title_lang1 || ""}`.includes(input.search) ||
            `${x.sku || ""}`.includes(input.search)
        )
        : products as unknown as Product[];
      const res = {
        count: products.length,
        data: data.slice(start, end),
      };
      resolve(res);
    });
  }

}
