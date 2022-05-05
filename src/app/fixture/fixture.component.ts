import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyTxtRecord } from 'dns';
import { FixtureService } from '../service/fixture.service';

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
  stats: [] | any
  players: [] | any
  scorer: [] | any

  constructor(private service : FixtureService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')
    this.service.getFixtureSpe(this._id).subscribe(data => {
      this.response = data;
      console.log(this.response)
      this.fixtures = this.response.fixture
      this.league = this.response.league
      this.teams = this.response.teams
      this.goals = this.response.goals
      this.score = this.response.score
      this.events = this.response.events
      this.formation_home = this.response.lineups[0].formation
      this.formation_away= this.response.lineups[1].formation
      this.lineup_home = this.response.lineups[0].startXI
      this.lineup_away = this.response.lineups[1].startXI
      this.stats = this.response.statistics
      this.players = this.response.players
    })  

    this.service.getGoalsAway(this._id).subscribe(data => {
      this.goals_away = data
    })
    
    this.service.getGoalsHome(this._id).subscribe(data => {
      this.goals_home = data
    })

    

  }

  
  
}