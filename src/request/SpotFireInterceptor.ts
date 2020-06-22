import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
@Injectable()
export class SpotFireInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith("https://visualizer.accencio.com/spotfire"))
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer QWRtaW5pc3RyYXRvcjpPSCVwQ3JkdlBOISo2PUdHUj95dlElbE1YQHp6ZTthQw=='
      }
    });
    return next.handle(request);
  }
}
