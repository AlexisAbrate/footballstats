import { Component, OnInit } from '@angular/core';
import { StandingService } from '../service/standing.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

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
  goalsfor: [] | any 
  goalsag: [] | any 
  scorer : [] | any 
  assists : [] | any 
  bestnotes: [] | any 
  dataChart: [] | any 

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

 this.standingService.getGoalsFor(this._id).subscribe(data => {
  this.goalsfor = data
  console.log(this.goalsfor)
 })

 this.standingService.getGoalsAg(this._id).subscribe(data => {
  this.goalsag = data
  console.log(this.goalsag)
 })



 this.standingService.getTopScorer(this._id).subscribe(data => {
   this.scorer = data
 })

 this.standingService.getTopAssist(this._id).subscribe(data => {
   this.assists= data
 })

 this.standingService.getBestNote(this._id).subscribe(data => {
   this.bestnotes = data
 })

 this.standingService.getDataChart(this._id).subscribe(data => {
   this.dataChart = data
   console.log(data)
 })
    
}
}


