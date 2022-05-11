import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service : LoginService) { }

  connect: string | null = ''

  ngOnInit(): void {

    this.connect=this.service.checkUserStorrage()
    
  }

  signOut() : void {
    this.service.signOut()
    console.log(this.connect)
    window.location.reload()
  }

}
