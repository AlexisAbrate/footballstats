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


  private _url_fixture_team1 = 'http://localhost:8282/fixtures/team/' 
  private _url_fixture_team2 = '/season/2021'

  getFixtures(id: Number) {
    console.log(id)
    var rep = this._http.get(this._url_fixture_team1 + id + this._url_fixture_team2)
    console.log(rep)
    return rep
    
  }

  private _url_players = 'http://localhost:8282/teams/players/teamid/'

  getPlayers(id: Number) {
    var rep = this._http.get(this._url_players+id)
    return rep
  }

  private _url_stats = 'http://localhost:8282/team/stats/'

  getStats(id: Number, season: Number) {
    var rep = this._http.get(this._url_stats+season+"/"+id)
    return rep
  }

  
  

}
