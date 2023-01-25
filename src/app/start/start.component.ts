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

  formData: FormObject = {
    username: ""
  }

  usernameFormControl = new FormControl('', [Validators.minLength(3)]);

  startGame() {


    this.gameManager.startGame();

  }

  registerUser() {

    if (this.usernameFormControl.valid) {
      this.gameManager.registerUser(this.usernameInput);
      // alert(this.usernameInput)
      console.log(this.formData);
    } else {
      alert("Ogiltigt värde");
    }

  }


}

type FormObject = {
  username: string;
}