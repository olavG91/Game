import { Component, OnInit, Input } from '@angular/core';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-gameobject',
  templateUrl: './gameobject.component.html',
  styleUrls: ['./gameobject.component.css']
})
export class GameobjectComponent {

  //Inputs för att deklarera om gameobject är visible eller inte samt ett id nummer.
  @Input() visible: boolean;
  @Input() id: number;

  constructor(private gameManager: GameManagerService) { }



}
