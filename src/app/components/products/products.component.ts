import { Component } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DealService } from '../../services/deal.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'], // Corrected from `styleUrl` to `styleUrls`
})
export class ProductsComponent {
  products:any;
  deals:any;
  constructor(private productData:ProductsDataService,private dealData:DealService)
  {
    productData.getproducts().subscribe((data)=>{
      console.log(data);
      this.products=data;
    }),
    dealData.getdeals().subscribe((data)=>{
      console.log(data);
      this.deals=data;
    })
  }


}
