import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  info = new BehaviorSubject<{}>({});
  infoObs = this.info.asObservable()


  logedIn = new BehaviorSubject<boolean>(false);
  logedInObs = this.logedIn.asObservable();

  alertLogedIn = new BehaviorSubject<boolean>(false);
  alertLogedInObs = this.alertLogedIn.asObservable()
  constructor() { }

  passInformation(arr: {}) {
    this.info.next(arr)
  }
  changeStatus(status:boolean){
    this.logedIn.next(status)
  }
}
