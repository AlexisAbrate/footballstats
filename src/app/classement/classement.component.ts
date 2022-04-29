import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

import { StandingService } from '../service/standing.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Team } from '../common/data/team';
import { League } from '../common/data/league';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  response: any;
  teams: any;
  _id: any
  journee: any

  constructor(private standingService : StandingService, private router : Router, private route : ActivatedRoute) { 
    
    
 }
 
 ngOnInit(): void {

  this._id = this.route.snapshot.paramMap.get('id')
    this.standingService.getStandings(this._id).subscribe(data => {
      this.response = data
      console.log(this.response)
      this.teams = this.response.league.standings[0]
      console.log(this.teams)
      this.journee=this.teams[0].all.played
      console.log(this.journee)
      
  })
    
}
}
