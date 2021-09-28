import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string ='http://localhost:9000/products';

  constructor(private httpClient:HttpClient) { }

  // get all products
  public getProduct() {
    return this.httpClient.get(this.url);
  }

  // get one product
  public getOneProduct(id:string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  // create product
  public addProduct(product:any) {
    return this.httpClient.post(this.url,product);
  }

  // update product
  public updateProduct(product:any) {
    return this.httpClient.put(`${this.url}/${product.id}`,product);
  }

  // delete product
  public deltetProduct(id:string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
