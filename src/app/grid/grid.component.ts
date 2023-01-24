import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../game-manager.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(public gameManager: GameManagerService) {}

  ngOnInit(): void {
      
  }

  clickGameobject(index:number){

    this.gameManager.clickGameobject(index);

  }
}
