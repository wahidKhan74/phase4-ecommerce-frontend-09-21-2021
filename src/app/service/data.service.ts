import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public product:Product = {
    id:3444565,
    name:"Dell Laptop xyz series",
    price:54546,
    description:"It is a Laptop"
  }
  constructor() { }
}

interface Product {
  id:number;
  name:string;
  price:number;
  description:string;
}