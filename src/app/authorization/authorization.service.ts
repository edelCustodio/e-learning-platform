import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http"
import { Observable, throwError, map, catchError } from 'rxjs';

import decode from 'jwt-decode';
// import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthorizationService {

    private readonly authUrl = "/login";

    private headers = new HttpHeaders();

    constructor(private http: HttpClient) { }


    login(userName: string, userPassword: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({ username: userName, password: userPassword }), { observe: 'response' }).pipe(
          map((response: HttpResponse<any>) => {
            let token = response.headers.has("Authorization");
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({ userName: userName, token: response.headers.get('Authorization') }));
                return true;
            } else {
                return false;
            }
          }),
          catchError((error: any) => {
            if (error.status === 401) {
                return throwError(() => 'Ilegal login');
            } else {
                return throwError(() => error.json().error || 'Server error');
            }
          })
        )
    }

    getToken(): string {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    }

    getUser(): string {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var user = currentUser && currentUser.userName;
        return user ? currentUser.userName : "";
    }


    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isAuthenticated(): boolean {
        const token: string = this.getToken();
        // return tokenNotExpired(null, token);
        return false;
    }

    isLoggedIn(): boolean {
        var token: string = this.getToken();
        return token && token.length > 0;
    }

    getRoles(token:string){
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles||[];
    }


}
