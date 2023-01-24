import { Component } from '@angular/core';
import { GameManagerService } from './game-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game';

  constructor(public gameManager: GameManagerService){}
  
  gameStarted:boolean = true;
  gameFinished:boolean = true;


}
