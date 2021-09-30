import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  public isActive:boolean = true;
  public status:boolean = false;

  onStatusChange() {
    this.isActive = !this.isActive;
    this.status = !this.status;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
