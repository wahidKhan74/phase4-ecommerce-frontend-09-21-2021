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

}
