import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})



export class StandingService {

  chartsData: [] | any
  
  constructor(private _http : HttpClient) { 

  }

  private _url_classement = environment.apiUrl+'classement'

  getStandings(id : Number){
    var rep = this._http.get(this._url_classement+"/2021/"+id)
    console.log(rep)
    console.log(this._url_classement)
    return rep;
}

private _url_topscorer = environment.apiUrl+'classement/topscorer/'

  getTopScorer(id : Number){
    var rep = this._http.get(this._url_topscorer+"2021/"+id)
    console.log(rep)
    return rep;
}

private _url_38 = environment.apiUrl+'fixtures/38journee/'

get38Journee(id: Number, season: Number) {
  var rep = this._http.get(this._url_38+season+"/"+id)
  return rep
}

private _url_topassist = environment.apiUrl+'classement/topassist/'

getTopAssist(id : Number){
  var rep = this._http.get(this._url_topassist+"2021/"+id)
  console.log(rep)
  return rep;
}

private _url_goalsfor = environment.apiUrl+'classement/stats/goalsfor/2021/'

getGoalsFor(id: Number) {
  var rep = this._http.get(this._url_goalsfor+id)
  return rep
}

private _url_goalsag = environment.apiUrl+'classement/stats/goalsagainst/2021/'

getGoalsAg(id: Number) {
  var rep = this._http.get(this._url_goalsag+id)
  return rep
}

private _url_bestnote = environment.apiUrl+'classement/notes/'

getBestNote(id: Number) {
  var rep = this._http.get(this._url_bestnote+"2021/"+id)
  return rep
}

private _url_charts_goals = environment.apiUrl+'classement/stats/goalchart/'
getDataChart(id: Number) {
 var rep = this._http.get(this._url_charts_goals+"2021/"+id)
 return rep  
}

private _url_XI_Goalkeeper = environment.apiUrl+'classement/BestXI/Goalkeeper/'

getXIGoal(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Goalkeeper+id+"/2021")
  return rep
}

private _url_XI_Defender = environment.apiUrl+'classement/BestXI/Defender/'

getXIDefense(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Defender+id+"/2021")
  return rep
}

private _url_XI_Midfielder = environment.apiUrl+'classement/BestXI/Midfielder/'

getXIMidfield(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Midfielder+id+"/2021")
  return rep
}

private _url_XI_Attack= environment.apiUrl+'classement/BestXI/Attacker/'

getXIAttack(id: Number, season: Number) {
  var rep = this._http.get(this._url_XI_Attack+id+"/2021")
  return rep
}

}
