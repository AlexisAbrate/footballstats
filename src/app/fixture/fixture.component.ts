import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private service : FixtureService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')
    this.service.getFixtureSpe(this._id).subscribe(data => {
      this.response = data;
      this.response = this.response.response
      this.events = this.response.events

    })

  }

}
