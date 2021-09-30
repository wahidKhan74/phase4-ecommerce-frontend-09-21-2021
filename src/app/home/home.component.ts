import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  product:any;

  constructor(public dataService:DataService) {
    this.product = dataService.product;
   }

  ngOnInit(): void {
  }

    public productItem :any = {
      id: 10000111222,
      name:"Mac book XYZ Series",
      desc:"It is a Laptop",
      rating: 4.97455,
      price:889.95,
      createdAt: new Date(),
    }



}
