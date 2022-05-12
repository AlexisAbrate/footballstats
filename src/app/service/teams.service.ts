import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private _http : HttpClient) { 

  }

  private _url_team = environment.apiUrl+'teams/id/'


  getTeam(id: Number) {
    console.log(id)
    var rep = this._http.get(this._url_team+id)
    console.log(rep)
    return rep;
  }


  private _url_fixture_team1 = environment.apiUrl+'fixtures/team/' 
  private _url_fixture_team2 = '/season/2021'

  getFixtures(id: Number) {
    console.log(id)
    var rep = this._http.get(this._url_fixture_team1 + id + this._url_fixture_team2)
    console.log(rep)
    return rep
    
  }

  private _url_players = environment.apiUrl+'teams/players/teamid/'

  getPlayers(id: Number) {
    var rep = this._http.get(this._url_players+id)
    return rep
  }

  private _url_stats = environment.apiUrl+'team/stats/'

  getStats(id: Number, season: Number) {
    var rep = this._http.get(this._url_stats+season+"/"+id)
    return rep
  }

  private _url_nation = environment.apiUrl+'team/players/nationality/teamid/'

  getNationality(id: Number, season: Number) {
    var rep = this._http.get(this._url_nation+id+"/"+season)
    return rep
  }

  private _url_minutes = environment.apiUrl+'team/stats/minutes/'

  getMinutes(id: Number, season: Number) {
    var rep = this._http.get(this._url_minutes+season+"/"+id)
    return rep
  }
  
  

}
