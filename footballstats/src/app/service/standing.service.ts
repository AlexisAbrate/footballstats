import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})



export class StandingService {

  
  constructor(private _http : HttpClient) { 

  }

  private _url_classement = 'http://localhost:8282/classement'

  getStandings(){
    var rep = this._http.get(this._url_classement+"/2021/"+"61")
    console.log(rep)
    return rep;
}
}
