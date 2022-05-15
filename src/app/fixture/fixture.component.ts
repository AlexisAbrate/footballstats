import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FixtureService } from '../service/fixture.service';
import { Chart } from 'chart.js';
import { TeamsService } from '../service/teams.service';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  _id: any
  response: any
  events: [] | any
  fixtures: any
  venue : any
  league: any
  teams: any
  goals: any
  goals_away: [] | any
  goals_home: [] | any
  score: any
  formation_home: [] | any
  formation_away: [] | any
  lineup_home: [] | any
  lineup_away: [] | any
  stats_home: [] | any
  stats_away: [] | any
  players_home : {} | any
  players_away : {} | any
  scorer: [] | any
  status: any
  headtohead: [] | any
  id_team1 : any
  id_team2 : any
  pieh2h: [] | any
 
  activeTab = {
    chronologie: true,
    face_to_face: false,
    stats: false,
    compo: false
  
  }
  constructor(private service : FixtureService, private serviceTeam : TeamsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')
    this.id_team1 = this.route.snapshot.paramMap.get('team1')
    this.id_team2 = this.route.snapshot.paramMap.get('team2')
    console.log(this.id_team1)
    console.log(this.id_team2)
    this.service.getFixtureSpe(this._id).subscribe(data => {
      this.response = data;
      //console.log(this.response)
      this.fixtures = this.response.fixture
      this.status = this.response.fixture.status.short
      this.league = this.response.league
      this.teams = this.response.teams
      this.goals = this.response.goals
      this.score = this.response.score
      this.events = this.response.events
      this.formation_home = this.response.lineups[0].formation
      this.formation_away= this.response.lineups[1].formation
      this.lineup_home = this.response.lineups[0].startXI
      this.lineup_away = this.response.lineups[1].startXI
      this.stats_home = this.response.statistics[0]
      this.stats_away = this.response.statistics[1]
    })  

    this.service.getPhotosHome(this._id).subscribe(data => {
      this.players_home = data
    })

    this.service.getPhotosAway(this._id).subscribe(data => {
      this.players_away = data
    })

    this.service.getGoalsAway(this._id).subscribe(data => {
      this.goals_away = data
    })
    
    this.service.getGoalsHome(this._id).subscribe(data => {
      this.goals_home = data
    })

    this.service.getH2h(this.id_team1,this.id_team2).subscribe(data => {
      this.headtohead = data
      console.log(this.headtohead)
      var dataChart = []
      var labelChart = [this.headtohead[0].teams.home.name,this.headtohead[0].teams.away.name,"Match nul"]
      var winTeam1 = 0
      var winTeam2 = 0
      var draw = 0
      console.log(this.headtohead.length)
      console.log(this.headtohead[0])
      for(let element of this.headtohead) {
        if(element.teams.home.name == this.headtohead[0].teams.home.name) {
          if(element.teams.home.winner == true){
            winTeam1 = winTeam1 + 1
          }
        }

        if(element.teams.home.name == this.headtohead[0].teams.away.name) {
          if(element.teams.home.winner == true){
            winTeam2 = winTeam2+ 1
          }
        }

        if(element.teams.home.winner == null && element.teams.away.winner == null){
          draw = draw + 1
        }

        if(element.teams.away.name == this.headtohead[0].teams.home.name) {
          if(element.teams.away.winner == true){
            winTeam1 = winTeam1 + 1
          }
        }

        if(element.teams.away.name == this.headtohead[0].teams.away.name) {
          if(element.teams.away.winner == true){
            winTeam2 = winTeam2 + 1
          }
        }
        
      }

      dataChart.push(winTeam1,winTeam2,draw)

      console.log(labelChart)
      console.log(dataChart)
      this.pieh2h = new Chart('pieh2h', {
        type : 'pie',
        data: {
          labels: labelChart,
          datasets : [
            {
              label: "Victoire",
              data: dataChart
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "6 derniers face à face"
            }
          }
        }
      })
      
    })
  
    this.serviceTeam.getTeam(this.id_team2).subscribe(data => {
      this.venue = data
    })

  }

  
  
}