import { Component } from '@angular/core';
import { GameManagerService } from '../game-manager.service';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(public gameManager: GameManagerService) { }

  usernameInput: string;

  startGame() {


    this.gameManager.startGame();

  }

  registerUser() {

    if (this.usernameInput.length >= 3) {
      this.gameManager.registerUser(this.usernameInput);
    }

  }


}

