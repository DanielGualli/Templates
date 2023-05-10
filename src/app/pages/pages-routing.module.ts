import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductComponent},
  {path: '', redirectTo:'./dashboard', pathMatch: 'full'},
  // {path: '**', component: NoFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PagesRoutingModule { }
