import { Component } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], // Corrected from `styleUrl` to `styleUrls`
})
export class ProductsComponent {
  products:any;
  constructor(private productData:ProductsDataService)
  {
    productData.getproducts().subscribe((data)=>{
      console.log(data);
      this.products=data;
    })
  }


}
