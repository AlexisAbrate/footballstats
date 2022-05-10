import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private _http : HttpClient) { }

  private _url_player = environment.apiUrl+'players/'

  getPlayer(id: Number) {
    var rep = this._http.get(this._url_player+id)
    return rep
  }
  


}
