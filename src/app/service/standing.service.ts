import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs';
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})



export class StandingService {

  
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

















}
