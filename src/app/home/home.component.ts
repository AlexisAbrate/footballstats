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
  selectedDate : string | any

  constructor(private datePipe: DatePipe, private service: FixtureService) { }

  ngOnInit(): void {

    this.todayDate = this.datePipe.transform(this.todayNumber,'yyyy-MM-dd')
    this.service.getFixturesByDate(this.todayDate).subscribe(data => {
      this.fixtures = data;
     
    })

  }

}
