import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MongoClient } from 'mongodb';
import { FixtureService } from '../service/fixture.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  todayNumber: number = Date.now()
  todayDate: string | null = ""
  fixtures : [] | any
  fixturesFrance : [] | any
  fixturesAllemagne : [] | any
  fixturesItalie : [] | any
  fixturesAngleterre : [] | any
  fixturesEspagne : [] | any
  selectedDate : string | any

  constructor(private datePipe: DatePipe, private service: FixtureService) { }

  ngOnInit(): void {

    this.todayDate = this.datePipe.transform(this.todayNumber,'yyyy-MM-dd')
    this.service.getFixturesByDate(this.todayDate,61).subscribe(data => {
      this.fixturesFrance = data;
    })
    this.service.getFixturesByDate(this.todayDate,78).subscribe(data => {
      this.fixturesAllemagne = data;
    })
    this.service.getFixturesByDate(this.todayDate,39).subscribe(data => {
      this.fixturesAngleterre = data;
    })
    this.service.getFixturesByDate(this.todayDate,140).subscribe(data => {
      this.fixturesEspagne = data;
    })
    this.service.getFixturesByDate(this.todayDate,135).subscribe(data => {
      this.fixturesItalie = data;
    })

  }

}
