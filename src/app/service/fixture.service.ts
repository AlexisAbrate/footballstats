import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private _http : HttpClient) {

   }

   private _url_fixture = 'http://localhost:8282/fixture/id/'

   getFixtureSpe(id: Number) {
     var rep = this._http.get(this._url_fixture+id)
     return rep;
   }

}
