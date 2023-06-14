import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GameService } from '../Services/game.service';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css']
})
export class LandingComponentComponent {

  constructor(private _gameService : GameService){ }

  

  

  PlayerX_Name  = new FormControl("");
  PlayerO_Name = new FormControl("");

  PlayerInputx_boolean : boolean = true;
  PlayerInputo_boolean : boolean = false;
  PlayGame_boolean : boolean = false;

  doneClick(){
    console.log(this.PlayerX_Name.value);
    if (this.PlayerInputo_boolean == true && this.PlayGame_boolean == false){
      this.PlayGame_boolean = true;
      this.PlayerInputo_boolean = false;
    }
    if(this.PlayerInputx_boolean == true)
    {
      this.PlayerInputx_boolean = false;
      this.PlayerInputo_boolean = true;
    }     
  }

  PlayGame(){
    this._gameService.UpdateNames(this.PlayerX_Name.value!,this.PlayerO_Name.value!);
  }




  

}
