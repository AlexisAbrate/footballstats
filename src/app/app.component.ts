import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'footballstats';

  constructor(public datepipe: DatePipe) {
    let currentDateTime = this.datepipe.transform((new Date),'yyyy-mm-dd')

    console.log(currentDateTime)
  }
}
