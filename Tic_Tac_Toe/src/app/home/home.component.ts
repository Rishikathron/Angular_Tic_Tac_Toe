import { Component,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  Playerx_Arr : number[][] = [[0,0,0],[0,0,0],[0,0,0]];
  Playero_Arr : number[][] = [[0,0,0],[0,0,0],[0,0,0]];

  PlayerX_Name : string = "";
  PlayerO_Name : string = "";

  playerx : boolean = false;
  counter : number = 0;

  started : boolean = false;
  stopped : boolean = false;

  winner_X : boolean = false;
  winner_O : boolean = false;
  Draw : boolean = false;
  
  start(){
    if(this.started == false){
      this.started = true;      
    }
  }

  clear(){

    this.Playero_Arr = [[0,0,0],[0,0,0],[0,0,0]];
    this.Playerx_Arr = [[0,0,0],[0,0,0],[0,0,0]];
    console.log(this.Playero_Arr + " and x is " + this.Playerx_Arr);
    this.counter = 0
    this.playerx = false;  
    this.winner_O = this.winner_X = false;
    this.started = false;
    this.stopped = false;
  }

  onClick(row : number, col : number ){ 

    if (this.stopped == false) {
      this.playGame(row,col);
    }

  }

  playGame(row : number, col : number ){    
    this.counter++;
    this.playerx = !this.playerx

    if(this.playerx == true){
      this.Playerx_Arr[row][col] = 1;
    }
    else{
      this.Playero_Arr[row][col] = 1;
    }
    console.log(this.Playerx_Arr);   
    if(this.counter>=5){
        if (this.playerx == true) {
          this.winner_X =  this.checkGameEnd(this.Playerx_Arr);
        }
        else{
          this.winner_O = this.checkGameEnd(this.Playero_Arr);
        }
    }

    if (this.winner_O == true || this.winner_X == true) {
      this.stopped = true;
      console.log("Winner is declared : winnerx" + this.winner_X + "winnerO" + this.winner_O );      
      return;
    }

    if (this.counter == 9) {
      this.stopped = true;
      console.log("Game Draw");   
      this.Draw = true;   
      return ;
    }
  }

  checkGameEnd(arr : Array<any>) : boolean{     
          
      if(arr[1][1] == 1){
          if (arr[1][0] == 1 && arr[1][2] == 1) {
              return true;
          }
          else if(arr[0][1] == 1 && arr[2][1] == 1){
            return true;
          }
          else if (arr[2][0] == 1 && arr[0][2] == 1 ) {
            return true;
          }
          else if (arr[0][0] == 1 && arr[2][2] == 1) {
            return true;
          }
      }

      if (arr[0][0] == 1) {
        let sum_tb = 0;
        let sum_lr = 0;  
        for (let index = 0; index < arr.length; index++) {
          sum_lr += arr[0][index];          
          sum_tb += arr[index][0];        
        }
        if (this.checkWin(sum_lr,sum_tb) == true) {
            return true;
        }                 
      }
      if(arr[2][2] == 1){
        let sum_tb = 0;
        let sum_lr = 0;  
        for (let index = 0; index < arr.length; index++) {
          sum_lr += arr[2][index];          
          sum_tb += arr[index][2];        
        }
        if (this.checkWin(sum_lr,sum_tb) == true) {
            return true;
        }        
      }
      return false;      
  }

  checkWin (a : number,b : number):boolean{
    if (a == 3 || b == 3 ) {
      return true;
    }
    return false;
  }

}
