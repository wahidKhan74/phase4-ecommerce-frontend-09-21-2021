import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private apiService : ApiService) { }
  products:any;

  ngOnInit(): void {
    this.getAllProduct();
  }

  onDelete(id:string) {
    this.apiService.deltetProduct(id).subscribe(res=>{
      console.log("product is deleted !");
      this.getAllProduct();
    })
  }

  getAllProduct() {
    this.apiService.getProduct().subscribe(
      (res)=>{
       // console.log(res);
        this.products = res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
