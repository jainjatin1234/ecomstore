import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../products/products.component";
import { BannerComponent } from "../banner/banner.component";
import { CategoryComponent } from "../category/category.component";
import { BlogComponent } from "../blog/blog.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponent, ProductsComponent, BannerComponent, CategoryComponent, BlogComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
