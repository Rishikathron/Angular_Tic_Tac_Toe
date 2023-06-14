import { Component } from '@angular/core';
import { GameService } from './Services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic_Tac_Toe';

  constructor(private _gameService : GameService){}
  gameStart : boolean = false;
  
}
