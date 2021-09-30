import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  customStyle :any = {
    color:'green',
    fontsize:'30px',
    border:'2px solid black',
    backgroundcolor:'lightgreen'
  }
  canSave:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
