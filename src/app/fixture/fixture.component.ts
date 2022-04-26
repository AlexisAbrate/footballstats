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
  score: any
  lineup: [] | any
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
      this.lineup = this.response.lineups
      this.stats = this.response.statistics
      this.players = this.response.players

    })  

  }
   


}
