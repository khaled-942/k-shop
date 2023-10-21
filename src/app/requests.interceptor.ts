import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './shared/services/loader.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(private loaderSer:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderSer.toggleStauts(true);
    return next.handle(request).pipe(finalize(()=>{this.loaderSer.toggleStauts(false)}));
  }
}
