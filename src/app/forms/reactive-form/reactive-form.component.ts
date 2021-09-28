import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  public signupForm: FormGroup;
  public submitted:boolean = false;


  constructor(private formBuilder: FormBuilder) {
    // init signupForm
    this.signupForm = this.formBuilder.group({
        firstName: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        lastName:["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        state:["",Validators.required],
        zipcode: ["",Validators.required],
        email:["",Validators.required],
        password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
        agree:["",Validators.required]
    });

   }

   public onSubmit(form:any) {
    if(form.valid){
      this.submitted = true;
      console.log(this.signupForm.value);
    } else{
      console.log("Invalid Form");
      this.validateForm(form);
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field=>{
      const control = form.get(field);
      if(control instanceof FormControl) {
        control.markAsTouched({ onlySelf : true });
      } else{
        this.validateForm(control);
      }
    });
  }

  hasError(field:any){
    return (this.signupForm.get(field)?.invalid && this.signupForm.get(field)?.touched && this.signupForm.get(field)?.errors );
  }

  //get methods for form
  get f() {
    return this.signupForm.controls;
  }

  ngOnInit(): void {
  }


}
