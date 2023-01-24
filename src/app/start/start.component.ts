import { Component } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(public gameManager: GameManagerService){}
  startGame() {


    this.gameManager.startGame();

  }
}
