import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ParentComponent} from "./parent/parent.component";
import {StudentComponent} from "./student/student.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ChildComponent} from "./child/child.component";
import {RouteParametrerComponent} from "./route-parametrer/route-parametrer.component";
import {FormComponent} from "./form/form.component";
import {ProductsComponent} from "./products/products.component";
import {NewProductComponent} from "./new-product/new-product.component";
import {ListProductComponent} from "./list-product/list-product.component";


const routes: Routes = [
  { path: '', component: StudentComponent , pathMatch:'full'},
  { path: 'children', component: ParentComponent },
  { path: 'form', component: FormComponent },
  { path: 'home', component: StudentComponent},
  { path: 'childre', component: ChildComponent},
  { path: 'product/:name', component: RouteParametrerComponent},
  { path: 'products', component: ListProductComponent},
  { path: 'addProduct', component: NewProductComponent},



];


@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
