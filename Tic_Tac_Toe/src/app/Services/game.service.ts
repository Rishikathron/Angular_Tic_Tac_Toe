import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public X_Name ?:string = "";
  public O_Name ?:string = "";
  public GameStart : boolean = false;

  public UpdateNames(x:string,o:string){
    this.O_Name = o;
    this.X_Name = x;
    this.GameStart = true;
  }

  
}
