import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {


  products:any =[
    {id:10001,name:"Mac book xyz series",price:988544.567, desc:'It is the best laptop', brand:'Apple'},
    {id:10002,name:"Dell book xyz series",price:22544.567, desc:'It is the best laptop', brand:'Dell'},
    {id:10003,name:"Lenovo book xyz series",price:118544.567, desc:'It is the best laptop', brand:'Lenovo'},
    {id:10004,name:"Asus book xyz series",price:22544.567, desc:'It is the best laptop', brand:'Asus'},
    {id:10005,name:"Hp book xyz series",price:3544.567, desc:'It is the best laptop', brand:'HP'},
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
