import { Component, Input, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/service/teams.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { ChoixChampionnatService } from 'src/app/service/choix-championnat.service'


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
  league: any
  _id : any
  fixture: [] | any
  players: [] | any
  stats: [] | any
  data: any
  goals: [] | any 
  minutes: [] | any 
  pie_min: [] | any
  lineup: [] | any
  nationality : [] | any
  bar_fixtures: [] | any
 polar_min: [] | any
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

  constructor(private service : TeamsService, private service_league : ChoixChampionnatService, private route : ActivatedRoute) {

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
          this.service_league.getLeague(this.fixture[0].league.id).subscribe(dataL => {
            console.log("la fixture 0 : " + this.fixture[0].league.id)
            this.league = dataL
            console.log("Ceci est : " + this.league)
          })
        });

        this.service.getPlayers(this._id).subscribe(data => {
          this.players = data

          var dataMinutes = []
          var dataPlayer = []
          for(let play of this.players) {
            dataPlayer.push(play.player.name)
            dataMinutes.push(play.statistics[0].games.minutes)
          }

          this.pie_min = new Chart('pie_min', {
            type : 'bar',
            data: {
              labels: dataPlayer,
              datasets : [
                {
                  label: "Minutes jouées",
                  data: dataMinutes
                }
              ]
            },
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Nombre de minutes jouées dans l'année par un joueur"
                }
              }
            }
          })
          
        })


        

        
        this.service.getStats(this._id,2021).subscribe(data => {
          this.stats = data
          this.goals = [this.stats.goals.for.total.total,this.stats.goals.for.total.away,this.stats.goals.for.total.home]
           
          var dataButs = []
          dataButs.push(this.stats.fixtures.played.total,this.stats.fixtures.wins.total,this.stats.fixtures.draws.total,this.stats.fixtures.loses.total)
          console.log(dataButs)
          var labelButs = ["Match joués","Victoires","Match nul", "Defaites"]  
          this.bar_fixtures= new Chart('bar_fix', {
            type : 'bar',
            data: {
              labels: labelButs,
              datasets : [
                {
                  label: "Nombre de match",
                  data: dataButs
                }
              ]
            },
            options: {
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Stats sur les matchs joués dans l'année"
                }
              }
            }
          })
        })

        /*this.service.getNationality(this._id,2021).subscribe(data => {
          this.nationality = data
          var labelChart = []
          var dataChart = []
          for(let nation of)
        })*/

        
        this.service.getMinutes(this._id,2021).subscribe(data => {
            this.minutes = data
            console.log("Ceci : "+ this.minutes)
             var labelPolar = ["0-15","16-30","31-45","46-60","61-75","76-90","91-105"]
             var valuePolar = []
             for(let min of this.minutes) {
               valuePolar.push(min.total)
             }

             console.log(valuePolar)

             this.polar_min= new Chart('polar_min', {
              type : 'polarArea',
              data: {
                labels: labelPolar,
                datasets : [
                  {
                    label: "Nombre de buts",
                    data: valuePolar
                  }
                ]
              },
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "But selon les minutes"
                  }
                }
              },
            })

        })
       
        

  }

  

}
