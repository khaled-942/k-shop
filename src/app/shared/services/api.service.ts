import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/productInterface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
 viewedIds= new BehaviorSubject([]);
 viewedIdsobs = this.viewedIds.asObservable()
  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }
  updatefav(user:Product,id:number){
    return this.http.patch<any>(`http://localhost:3000/products/${id}`,user);
  }
  
  filterByName(categore:string){
    return this.http.get(`http://localhost:3000/products?title_like=${categore}`)
  }
}
