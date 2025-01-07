import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductsComponent } from './components/products/products.component';
import { BlogComponent } from './components/blog/blog.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [ 
    RouterOutlet,
    HeaderComponent,
    BannerComponent,
    CategoryComponent,
    ProductsComponent,
    BlogComponent,

   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webapp';
}
