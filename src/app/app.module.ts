import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneWayComponent } from './data/one-way/one-way.component';
import { TwoWayComponent } from './data/two-way/two-way.component';
import { StyleBindingComponent } from './data/style-binding/style-binding.component';
import { EventBindingComponent } from './data/event-binding/event-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { IfComponent } from './directive/if/if.component';
import { ForComponent } from './directive/for/for.component';
import { SwitchComponent } from './directive/switch/switch.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { InputformaterDirective } from './directive/inputformater.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductsComponent,
    HomeComponent,
    NotFoundComponent,
    OneWayComponent,
    TwoWayComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    StyleComponent,
    ClassComponent,
    InputformaterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
