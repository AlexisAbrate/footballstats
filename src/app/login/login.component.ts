import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  userLogin() {
    console.log(this.user)
    this.loginService.loginUser(this.user).subscribe(data => {
      alert("Login succesful")
      this.loginService.saveUserStorrage(this.user)
    },error => alert("Wrong password or email")
    )
    console.log(this.loginService.favorisUser(this.user))
    setTimeout(this.redirect,2000)
  }

  redirect(): void {
    window.location.replace('')
  }

}
