import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyTxtRecord } from 'dns';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  _id : any
  player: any

  constructor(private service : PlayerService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')
    this.service.getPlayer(this._id).subscribe(data => {
      this.player = data
      if(this.player.statistics[0].games.position == "Defender"){
        this.player.statistics[0].games.position = "Defenseur"
      }
      if(this.player.statistics[0].games.position == "Attacker"){
        this.player.statistics[0].games.position = "Attaquant" 
      }
      if(this.player.statistics[0].games.position == "Midfilder"){
        this.player.statistics[0].games.position = "Milieu de terrain"
      }
      if(this.player.statistics[0].games.position == "Goalkeeper"){
        this.player.statistics[0].games.position = "Gardien de but"
      }
    })
  }

}
