import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // data
  public username: string = "John Smith";
  public age: number = 22;
  public message: string = "Today is a good day !";
  public isMarried: boolean = false;
  public email: string = "admin@gmail.com";
  public imgaeURL: string = "./assets/images/smiley.jpg";

  // object type :custom type
  public product: Product = { id: 10111002, name: "DELL Laptop xyz series", price: 876745.54, isActive: true, description: "It is a Laptop" };

  public color = { RED:'red', GREEN:'green', ORAGNE:'orange', BLUE:'blue', YELLOW:'#d39e00'};
}

interface Product {
  id: number;
  name: string;
  price: number;
  isActive: boolean;
  description: string
}
