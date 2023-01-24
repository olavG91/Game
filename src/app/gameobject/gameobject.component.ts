import { Component, OnInit, Input } from '@angular/core';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-gameobject',
  templateUrl: './gameobject.component.html',
  styleUrls: ['./gameobject.component.css']
})
export class GameobjectComponent {

  @Input() visible: boolean;
  @Input() id: number;

  constructor(private gameManager: GameManagerService) { }

  // ngOnInit() {
  //   this.gameManager.visible$.subscribe(rows => {
  //     this.visible = rows[this.id].visible;
  //     console.log("New change");
  //   });
  //   console.log("This id is: "+ this.id);
  // }

}
