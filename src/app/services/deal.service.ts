import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deal } from '../interface/deal.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private url = 'https://ecomstorebackend.onrender.com/getdeals';

   constructor(private http: HttpClient) {}

   // Fetch products and process the response
   getdeals(): Observable<Deal[]> {
     return this.http.get<any>(this.url).pipe(
       map((response) => this.processResponse(response)) // Process the response
     );
   }

   // Transform the API response to match the Product interface
   private processResponse(response: any): Deal[] {
     return response.data.map((product: any) => ({
       name: product.name,
       title:product.title,
       // imageUrl: product.imageUrl,
       image:product.image,
       price: product.price,
       dprice:product.dprice,
       sold: product.sold,
       available:product.available
     }));
   }
}
