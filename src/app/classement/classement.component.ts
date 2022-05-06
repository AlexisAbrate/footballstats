import { Component, OnInit } from '@angular/core';
import { StandingService } from '../service/standing.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

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
  dataSetFor: [] | any
  dataSetAg: [] | any
  chart : [] | any
 

  
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

  var dataButs = []
  var labelChart = []
  var dataJson = {"team": "", "butp":0, "butc":0};
  for(let element of this.goalsfor){
    dataJson.team = element.team.name
    dataJson.butp = Number(element.goals.for.total.total)
    dataJson.butc = Number(element.goals.against.total.total)
    dataButs.push({...dataJson})
    labelChart.push(dataJson.team)
    console.log("element")
    console.log(dataJson)
  }

  var valuePour = []
  var valueContre = []
  valuePour = dataButs.map(({butp}) => [butp])
  valueContre = dataButs.map(({butc}) => [butc])
  console.log(valuePour)
  console.log(valueContre)
  
  this.chart = new Chart('chartbut', {
    type: 'bar',
    data: {
      labels : labelChart,
      datasets: [
        {
          label:"But pour",
          data: valuePour,
          borderWidth: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
        {
          label:"But contre",
          data: valueContre,
          borderWidth:1,
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "But pour et contre durant la saison par equipe"
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Equipe"
          }
        },
        y: {
          title: {
            display: true,
            text: "Nombre de buts"
          }
        }
      }

    }
  })
  console.log(this.goalsfor)
 })

 /*this.standingService.getGoalsAg(this._id).subscribe(data => {
  this.goalsag = data
  console.log(this.goalsag)
 })*/



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


