import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public productForm: FormGroup;
  public submitted:boolean = false;
  public response :string="";

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    // init productForm
    this.productForm = this.formBuilder.group({
        name: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
        price:["",[Validators.required]],
        description:["",Validators.required]
    });

   }

   public onSubmit(form:any) {
    if(form.valid){
      this.submitted = true;
      // console.log(this.productForm.value);
      this.apiService.addProduct(this.productForm.value).subscribe(res=> {
        this.response ="Product is created Succcessfully !";
      }, err=> {
        this.response ="Product creation failed !";
      })
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
    return (this.productForm.get(field)?.invalid && this.productForm.get(field)?.touched && this.productForm.get(field)?.errors );
  }

  //get methods for form
  get f() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
  }

}
