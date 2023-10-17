import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShareProductDetailsService {
  productDetails = new BehaviorSubject({});
  productDetailsObserv = this.productDetails.asObservable();
  constructor() {}
}
