import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails/productdetails.component';
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    HeaderComponent,
    BannerComponent,
    CategoryComponent,
    ProductsComponent,
    BlogComponent,
    HomeComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webapp';
}
