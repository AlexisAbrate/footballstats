import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/service/teams.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  response_infos: any
  response_fixture: any
  team : any
  venue : any
  _id : any
  fixture: [] | any
  players: [] | any
  stats: [] | any
  data: any
  goals: [] | any 
  minutes: [] | any 

  lineup: [] | any

  //monoChartTypes : ChartType[] = [  'bar' , 'pie' , 'doughnut' ,'polarArea' ];
  //multiChartTypes : ChartType[] = [ 'line' , 'bar'  ];

  //monoChartType : ChartType = 'bar'

   //valeurs affichées dans le premier graphique

  //monoChartData: ChartDataset[] = []
  
  
  //monoChartLabels: string[] = ['Total but', "But a l'exterieur", 'But à domicile'];

  //oalChartType : ChartType = 'bar'
   //valeurs affichées dans le premier graphique

  //goalChartData: ChartDataset[] = []  
  
  //goalChartLabels: string[] = ['Total but', "But a l'exterieur", 'But à domicile'];



  //minutesChartType : ChartType = 'pie'

  //minutesChartData: ChartDataset[] = []  
  
  //minutesChartLabels: string[] = ['Total but', "But a l'exterieur", 'But à domicile'];


  /*
  multiChartType: ChartType = 'line';

  multiChartData: ChartDataset[] = []

  multiChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
*/

  constructor(private service : TeamsService, private route : ActivatedRoute) {

   }

  ngOnInit(): void {
    //recuperation d'un parametre de la requette
    this._id = this.route.snapshot.paramMap.get('id')
    //this.route.queryParams.subscribe(params => {
      //this._id = params['id']
      console.log(this._id)
      this.service.getTeam(this._id).subscribe(data => {
        this.response_infos = data;
        this.team = this.response_infos.team;
        console.log(this.team)
        this.venue = this.response_infos.venue;
      })
      this.service.getFixtures(this._id).subscribe(data => {
          this.fixture = data
          console.log(this.fixture)
        });

        this.service.getPlayers(this._id).subscribe(data => {
          this.players = data
        })

        
        this.service.getStats(this._id,2021).subscribe(data => {
          this.stats = data
          this.goals = [this.stats.goals.for.total.total,this.stats.goals.for.total.away,this.stats.goals.for.total.home]
                        
        })


        /*
        this.service.getMinutes(this._id,2021).subscribe(data => {
          this.minutes = data
          this.minutesChartData = [
            { data: this.minutes, label: 'Buts' },
          ];          
        })*/
       
        

  }

  

}
