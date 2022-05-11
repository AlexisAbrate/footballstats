import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user: User = new User()

  constructor(private service : LoginService) { }

  ngOnInit(): void {
  }

  inscription() {
    console.log(this.user)
    this.service.inscriptionUser(this.user).subscribe(data => {
      alert("Inscription reussie")
    },error => alert("Inscription non valable"))
    setTimeout(this.redirect,2000)
  }

  redirect(): void {
    window.location.replace('login')
  }


}
