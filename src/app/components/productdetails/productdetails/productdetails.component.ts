import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { BannerComponent } from "../../banner/banner.component";
import { HeaderComponent } from "../../header/header.component";
import { BlogComponent } from "../../blog/blog.component";
import { ProductsDataService } from '../../../services/products-data.service';
import { Product } from '../../../interface/product.interface';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-productdetails',
  imports: [RouterOutlet, BannerComponent, HeaderComponent, BlogComponent, CommonModule, FooterComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent {
  // productDetails:undefined | product
  productDetails: any;

constructor(private activeRoute:ActivatedRoute, private product:ProductsDataService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  let productId = this.activeRoute.snapshot.paramMap.get('id');
  console.warn(productId);
  productId && this.product.getproductdetails(productId).subscribe((data)=>{
    console.warn(data)
    this.productDetails = data;
    console.log(this.productDetails.data.name)
  })
}


}
