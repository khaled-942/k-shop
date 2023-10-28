import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  info = new BehaviorSubject<{}>({});
  infoObs = this.info.asObservable();

  logedIn = new BehaviorSubject<boolean>(false);
  logedInObs = this.logedIn.asObservable();

  alertLogedIn = new BehaviorSubject<boolean>(false);
  alertLogedInObs = this.alertLogedIn.asObservable();

  constructor(private http: HttpClient) {}
  getusers() {
    return this.http.get('http://localhost:3000/users');
  }
  adduser(newUser:User) {
    return this.http.post('http://localhost:3000/users',newUser);
  }
  passInformation(arr: {}) {
    this.info.next(arr);
  }
  changeStatus(status: boolean) {
    this.logedIn.next(status);
  }
}
