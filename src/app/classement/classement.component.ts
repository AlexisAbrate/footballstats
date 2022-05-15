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
  calendrier : [] | any
  goalsfor: [] | any 
  goalsag: [] | any 
  scorer : [] | any 
  assists : [] | any 
  bestnotes: [] | any 
  dataChart: [] | any 
  dataSetFor: [] | any
  dataSetAg: [] | any
  chart : [] | any
  XIAttack : [] | any
  XIMidfield : [] | any
  XIDefend : [] | any
  XIGoal : [] | any
  playsAttack : [] | any
  playsMid : [] | any
  playsDef : [] | any
  playsGoal : [] | any
 
activeTab = {
  tab_class: false,
  calendar: true,
  stats: false,
  xitype: false

}
  
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

  this.standingService.get38Journee(this._id,2021).subscribe(data => {
    this.calendrier = data
    console.log("journee 38 :" + this.calendrier)
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

 this.standingService.getXIAttack(this._id,2021).subscribe(data => {
  this.playsAttack = data
  var attack = []
  var count = 1
  var dataJson = {"team": "", "name": "", "note": "", "logo":"","id_class":""};
  for(let element of this.playsAttack){
    
    dataJson.team = element.statistics[0].team.name
    dataJson.logo = element.statistics[0].team.logo
    dataJson.note = element.statistics[0].games.rating
    dataJson.name = element.player.name
    dataJson.id_class = "attacker" + count
    attack.push({...dataJson})
    count++
 }

 this.XIAttack = attack
 console.log(this.XIAttack)
})
   
 this.standingService.getXIMidfield(this._id,2021).subscribe(data => {
  this.playsMid = data
  var mid = []
  var count = 1
  var dataJson = {"team": "", "name": "", "note": "", "logo":"","id_class":""};
  for(let element of this.playsMid){
    dataJson.team = element.statistics[0].team.name
    dataJson.logo = element.statistics[0].team.logo
    dataJson.note = element.statistics[0].games.rating
    dataJson.name = element.player.name
    dataJson.id_class = "midfield"+count 
    mid.push({...dataJson})
    count++
}

this.XIMidfield = mid
console.log(this.XIMidfield)
})


this.standingService.getXIDefense(this._id,2021).subscribe(data => {
  this.playsDef = data
  var def = []
  var count = 1
  var dataJson = {"team": "", "name": "", "note": "", "logo":"","id_class":""};
  for(let element of this.playsDef){
    dataJson.team = element.statistics[0].team.name
    dataJson.logo = element.statistics[0].team.logo
    dataJson.note = element.statistics[0].games.rating
    dataJson.name = element.player.name
    dataJson.id_class = "defender"+count
    def.push({...dataJson})
    count++
}
this.XIDefend = def
console.log(this.XIDefend)
})

this.standingService.getXIGoal(this._id,2021).subscribe(data => {
  this.playsGoal = data
  var goal = []
  var dataJson = {"team": "", "name": "", "note": "", "logo":"","id_class":""};
  for(let element of this.playsGoal){
    dataJson.team = element.statistics[0].team.name
    dataJson.logo = element.statistics[0].team.logo
    dataJson.note = element.statistics[0].games.rating
    dataJson.name = element.player.name
    dataJson.id_class = "goal"
    goal.push({...dataJson})
    
}
  this.XIGoal = goal
  console.log(this.XIGoal)
})

}
 
}
