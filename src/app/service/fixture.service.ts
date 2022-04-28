import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private _http : HttpClient) {

   }

   private _url_fixture = 'http://localhost:8282/fixtures/id/'

   getFixtureSpe(id: Number) {
     var rep = this._http.get(this._url_fixture+id)
     return rep;
   }

   private _url_journee = '/fixtures/saison/champ/journee/'
   
   getFixturesByJournee(id: Number, season: Number, journee: Number) {
     var rep =this._http.get(this._url_journee+season+"/"+id+"/"+journee)
     return rep
   }

}
