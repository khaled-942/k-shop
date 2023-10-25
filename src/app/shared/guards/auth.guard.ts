import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AccountService);
  let status: boolean = false;
  loginService.logedInObs.subscribe((data)=>{
    status = data
  })
  if (status) {
    return true;
  }
  else{
    loginService.alertLogedIn.next(true)
    return false;
  }
};
