import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class StandingService {

  chartsData: [] | any
  
  constructor(private _http : HttpClient) { 

  }

  private _url_classement = 'http://localhost:8282/classement'

  getStandings(id : Number){
    var rep = this._http.get(this._url_classement+"/2021/"+id)
    console.log(rep)
    return rep;
}

private _url_topscorer = 'http://localhost:8282/classement/topscorer/'

  getTopScorer(id : Number){
    var rep = this._http.get(this._url_topscorer+"2021/"+id)
    console.log(rep)
    return rep;
}

private _url_topassist = 'http://localhost:8282/classement/topassist/'

getTopAssist(id : Number){
  var rep = this._http.get(this._url_topassist+"2021/"+id)
  console.log(rep)
  return rep;
}

private _url_goalsfor = 'http://localhost:8282/classement/stats/goalsfor/2021/'

getGoalsFor(id: Number) {
  var rep = this._http.get(this._url_goalsfor+id)
  return rep
}

private _url_goalsag = 'http://localhost:8282/classement/stats/goalsagainst/2021/'

getGoalsAg(id: Number) {
  var rep = this._http.get(this._url_goalsag+id)
  return rep
}

private _url_bestnote = 'http://localhost:8282/classement/notes/'

getBestNote(id: Number) {
  var rep = this._http.get(this._url_bestnote+"2021/"+id)
  return rep
}

private _url_charts_goals = 'http://localhost:8282/classement/stats/goalchart/'
getDataChart(id: Number) {
 var rep = this._http.get(this._url_charts_goals+"2021/"+id)
 return rep  
}

private _url_XI_Goalkeeper = 'http://localhost:8282/classement/BestXI/Goalkeeper/'

getXIGoal(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Goalkeeper+id+"/2021")
  return rep
}

private _url_XI_Defender = 'http://localhost:8282/classement/BestXI/Defender/'

getXIDefense(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Defender+id+"/2021")
  return rep
}

private _url_XI_Midfielder = 'http://localhost:8282/classement/BestXI/Midfielder/'

getXIMidfield(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Midfielder+id+"/2021")
  return rep
}

private _url_XI_Attack= 'http://localhost:8282/classement/BestXI/Attacker/'

getXIAttack(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Attack+id+"/2021")
  return rep
}

}
