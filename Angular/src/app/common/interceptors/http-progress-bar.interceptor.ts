import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgressBarService } from '../service/progress-bar.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpProgressBarInterceptor implements HttpInterceptor {

  constructor(
    private readonly _progressBarService: ProgressBarService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._progressBarService.show();

    return next.handle(request)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this._progressBarService.hide();
        }
      }, (error) => {
        this._progressBarService.hide();
      }));
  }
}
