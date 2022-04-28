import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChoixChampionnatService } from '../service/choix-championnat.service';

@Component({
  selector: 'app-choix-championnat-classement',
  templateUrl: './choix-championnat-classement.component.html',
  styleUrls: ['./choix-championnat-classement.component.css']
})
export class ChoixChampionnatClassementComponent implements OnInit {

  constructor(private service: ChoixChampionnatService, private router : Router, private route : ActivatedRoute) { }

  liste_champ: Number[] = [39,61,135,140,78] 
  ligue1 : any
  bundes: any
  liga: any
  serie: any
  premier : any

  ngOnInit(): void {
    this.liste_champ.forEach(element => {
      this.service.getLeague(element).subscribe(data => {
        if(element==39){
          this.premier = data
        }
        if(element==61){
          this.ligue1 =data
        }
        if(element==135){
          this.serie = data
        }
        if(element==78){
          this.bundes = data
        }
        if(element==140){
          this.liga = data
        }       
      })
    })
    
  }


}
