import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(AccountService);
  const router = inject(Router);
  let status: boolean = false;
  loginService.logedInObs.subscribe((data)=>{
    status = data
  })
  if (status) {
    return true;
  }
  else{
    alert('You should Log-In to view Profile');
    router.navigate(['/login'])
    return false;
  }
};
