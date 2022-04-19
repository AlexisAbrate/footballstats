import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private _http : HttpClient) { 

  }

  private _url_team = 'http://localhost:8282/teams/id/'

  getTeam(id: Number) {
    console.log(id)
    var rep = this._http.get(this._url_team+id)
    console.log(rep)
    return rep;
  }
}
