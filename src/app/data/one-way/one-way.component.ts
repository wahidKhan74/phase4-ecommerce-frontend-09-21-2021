import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // data
  public username:string ="John Smith";
  public age:number = 32;
  public message:string="Today is a good day !";
  public isMarried:boolean = false;
  public email:string="admin@gmail.com";
  public imgaeURL:string = "./assets/images/smiley.jpg";

  // object type :custom type
  public product:Product ={id:10111002,name:"DELL Laptop xyz series",price:876745.54,isActive:true,description:"It is a Laptop"};
}

interface Product {
  id:number;
  name:string;
  price:number;
  isActive:boolean;
  description:string
}
