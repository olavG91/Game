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

  username:string;

  matcher = new ErrorStateMatcher();
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  startGame() {


    this.gameManager.startGame();

  }

  registerUser(user:string){

    this.gameManager.registerUser(user);
    alert(user)
  }
}
