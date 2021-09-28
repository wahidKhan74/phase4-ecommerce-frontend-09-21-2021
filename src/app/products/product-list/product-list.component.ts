import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.apiService.getProduct().subscribe(
      (res)=>{
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
