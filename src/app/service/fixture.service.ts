import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { elementAt } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  
  constructor(private _http : HttpClient) {

   }

   private _url_fixture = environment.apiUrl+'fixtures/id/'

   getFixtureSpe(id: Number) {
     var rep = this._http.get(this._url_fixture+id)
     return rep;
   }

   private _url_goalshome = environment.apiUrl+'fixtures/goalhome/id/'

   getGoalsHome(id: Number) {
     var rep = this._http.get(this._url_goalshome+id)
     return rep;
   }
   
   private _url_goalsaway = environment.apiUrl+'fixtures/goalaway/id/'

   getGoalsAway(id: Number) {
     var rep = this._http.get(this._url_goalsaway+id)
     return rep;
   }

   private _url_journee = environment.apiUrl+'fixtures/season/champ/journee/'
   
   getFixturesByJournee(id: Number, season: Number, journee: Number) {
     var rep =this._http.get(this._url_journee+season+"/"+id+"/"+journee)
     return rep
   }

   private _url_date = environment.apiUrl+'fixtures/today/'
   
   getFixturesByDate(date: String | null, id: Number) {
     var rep = this._http.get(this._url_date+date+"/"+id)
     return rep
   }


   private _url_photos_home = environment.apiUrl+'fixtures/photo-home/'

   getPhotosHome(id: Number) {
     var rep = this._http.get(this._url_photos_home+id)
     return rep
   }

   private _url_photos_away = environment.apiUrl+'fixtures/photo-away/'

   getPhotosAway(id: Number) {
     var rep = this._http.get(this._url_photos_away+id)
     return rep
   }

  }
