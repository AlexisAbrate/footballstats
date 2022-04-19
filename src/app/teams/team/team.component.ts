import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/service/teams.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  response: any
  team : any
  venue : any
  _id : any

  constructor(private service : TeamsService, private route : ActivatedRoute) {

   }

  ngOnInit(): void {
    //recuperation d'un parametre de la requette
    this._id = this.route.snapshot.paramMap.get('id')
    //this.route.queryParams.subscribe(params => {
      //this._id = params['id']
      console.log(this._id)
      this.service.getTeam(this._id).subscribe(data => {
        this.response = data;
        this.team = this.response.team;
        console.log(this.team)
        this.venue = this.response.venue;
      })
    //})


  }

}