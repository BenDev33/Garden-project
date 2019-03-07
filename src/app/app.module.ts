import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },

 ];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    DisplayProductsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
