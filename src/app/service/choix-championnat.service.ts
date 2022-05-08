import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoixChampionnatService {

  constructor(private _http: HttpClient) { 

  }


  private _url_team = environment.apiUrl+'league/'

  getLeague(id:Number){
    var rep = this._http.get(this._url_team+id)
    return rep
  }
  
}
