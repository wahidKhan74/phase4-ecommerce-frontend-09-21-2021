import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public user: User = {
    firstName: "",
    lastName: "",
    state: "",
    zipcode: 0,
    email: "",
    password: "",
    agree:false
  }
  public submitted:boolean = false;

  public onSubmit(form:any) {
    if(form.valid){
      this.submitted = true;
      console.log(this.user);
    } else{
      console.log("Invalid Form");
      this.validateForm(form);
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field=>{
      const control = form.controls[field];
      control.markAsTouched({ onlySelf : true });
    })
  }

  hasError(field:any){
    return (field.invalid && field.touched && field.errors );
  }
}

interface User {
  firstName: string;
  lastName: string;
  state: string;
  zipcode: number;
  email: string;
  password: string;
  agree:boolean;
}