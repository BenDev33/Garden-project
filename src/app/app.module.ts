import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlertService, AuthenticationService, UserService} from './_services';


const appRoutes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', redirectTo: ''}
 ];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
