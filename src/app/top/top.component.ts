import { Component } from '@angular/core';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {


constructor(public gameManager: GameManagerService){}



}
