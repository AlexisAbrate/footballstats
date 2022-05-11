import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const USER_LOGIN = ''

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private _http : HttpClient) {}

   private baseurl=environment.javaUrl+"login"
   loginUser(user: User): Observable<object>{
     console.log(user)
    return this._http.post(this.baseurl, user)
  }

  signOut():void {
    window.sessionStorage.clear()
  }

  saveUserStorrage(user : User):void {
    window.sessionStorage.setItem(USER_LOGIN, user.email)
  }

  checkUserStorrage(): string | null {
    return window.sessionStorage.getItem(USER_LOGIN)
  }

  private baseurl_inscription=environment.javaUrl+"inscription"
  inscriptionUser(user : User):Observable<object>{
    console.log(user)
    return this._http.post(this.baseurl_inscription, user)
  }


  private baseurl_favoris= environment.javaUrl+"/favoris/"
  favorisUser(user : User):Observable<object>{
    return this._http.get(this.baseurl_favoris+user.email)
  }
}
