import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class RegisterService{
    public url: String;

    constructor(
        public _http: HttpClient
    ){
        this.url = "http://localhost:5069/";
    }

    getProvince(): Observable<any>{
        return this._http.get(this.url + 'api/getProvince');
    }

    getCanton(idProvincia): Observable<any>{
        return this._http.get(this.url + 'api/getCanton/' + idProvincia)
    }
    getDistric(idCanton): Observable<any>{
        return this._http.get(this.url + 'api/getDistric/'+idCanton)
    }

    saveUser(newUser): Observable<any>{
        let params = JSON.stringify(newUser);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        console.log(params);
        return this._http.post(this.url + 'api/save-user', params, {headers: headers});
    }  
}