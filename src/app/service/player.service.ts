import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _http : HttpClient) { }

  private _url_player = 'http://localhost:8282/players/'

  getPlayer(id: Number) {
    var rep = this._http.get(this._url_player+id)
    return rep
  }
  


}
