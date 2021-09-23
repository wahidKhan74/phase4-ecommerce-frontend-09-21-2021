import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // data
  public username:string ="";
  public message:string="";
  public dtat:string="";

 // methods
 public onSave() {
   console.log("On save");
 }

 public onSubmit(message:any){
   console.log("On Submit " +message.value);
   this.message = message.value;
   console.log(this.message);
   
 }

 public onInput($event:any){
  console.log("On Input " + $event.target.value);
 }


}
