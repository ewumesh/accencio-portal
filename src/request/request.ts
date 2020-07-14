import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { ASession } from './session';
@Injectable()
export class ARequest {
    constructor(private http: HttpClient, private session: ASession) {}
    get httpOptions() {
        return {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Cache-Control': 'no-cache',
              'Authorization': this.session.id_token
            })
          };
    }
    get(route): Observable<any> {
        console.log(this.session.id_token);
        return this.http.get(environment.API_GATEWAY + route);
    }
    delete(route): Observable<Object> {
        return this.http.delete(environment.API_GATEWAY + route);
    }
    post(route: string, body: any): Observable<any> {
        return this.http.post(environment.API_GATEWAY + route, body);
	}
}
