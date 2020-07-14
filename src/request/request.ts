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
              'Authorization': this.session.id_token
            })
          };
    }
    get(route): Observable<any> {
        return this.http.get(environment.API_GATEWAY + route, this.httpOptions);
    }
    delete(route): Observable<Object> {
        return this.http.delete(environment.API_GATEWAY + route, this.httpOptions);
    }
    post(route: string, body: any): Observable<any> {
        return this.http.post(environment.API_GATEWAY + route, body, this.httpOptions);
	}
}
