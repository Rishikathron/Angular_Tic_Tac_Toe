import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Playerx_Arr : number[][] = [[0,0,0],[0,0,0],[0,0,0]];
  Playero_Arr : number[][] = [[0,0,0],[0,0,0],[0,0,0]];

  playerx : boolean = false;
  playero : boolean = false;

  started : boolean = false;
  
  start(){
    if(this.started == false){
      this.started = true;
    }
  }

  onClick(row : number, col : number ){ 
    this.playerx = !this.playerx
    if(this.playerx == true){
      this.Playerx_Arr[row][col] = 1;
    }
    else{
      this.Playero_Arr[row][col] = 1;
    }
    console.log(this.Playerx_Arr);
    this.playero = !this.playerx;
  }


}
