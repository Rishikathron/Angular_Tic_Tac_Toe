import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  playerx : boolean = false;
  playero : boolean = false;
  started : boolean = false;

  onClick(){   
    console.log("onclick called");
    this.playerx = !this.playero;
    this.playero = !this.playerx;
    // if(this.playerx == false){
      
    //   }   
    // if(this.playero == false)
    // {
    //   this.playero = true;
    //   this.playerx = false;
    // }
  }

  start(){
    if(this.started == false){
      this.started = true;
    }
  }
}
