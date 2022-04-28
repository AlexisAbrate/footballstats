import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FixtureService } from '../service/fixture.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  _id: any
  journee: any
  season: any
  fixtures: [] | any
  reponse: any

  constructor(private service: FixtureService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this._id = this.route.snapshot.paramMap.get('id')
    this.journee= this.route.snapshot.paramMap.get('journee')
    this.season = this.route.snapshot.paramMap.get('season')
    this.service.getFixturesByJournee(this._id,this.season,this.journee).subscribe(data => {
      this.fixtures = data      
    })


    
  }

}
