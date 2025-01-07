import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private url = 'http://localhost:3000/getproducts';

  constructor(private http: HttpClient) {}

  // Fetch products and process the response
  getproducts(): Observable<Product[]> {
    return this.http.get<any>(this.url).pipe(
      map((response) => this.processResponse(response)) // Process the response
    );
  }

  // Transform the API response to match the Product interface
  private processResponse(response: any): Product[] {
    return response.data.map((product: any) => ({
      name: product.name,
      title:product.title,
      // imageUrl: product.imageUrl,
      image:product.image,
      price: product.price,
      dprice:product.dprice,
      stock: product.stock
    }));
  }
}
