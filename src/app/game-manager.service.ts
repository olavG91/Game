import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UpdateScoreService } from './update-score.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  gameStarted: boolean = false;

  private rows: MoleCol[] = [];

  private visibleSubject = new BehaviorSubject<MoleCol[]>([]);
  visible$ = this.visibleSubject.asObservable();

  private visibleCounter = 0;
  private timer;
  private gameTimer;

  private bestTime = 990;

  private gameCount;
  timeLeft = 60;

  points = 0;

  registered: boolean = false;
  username: string = "";
  constructor(public updateScore: UpdateScoreService) {

    for (let i = 0; i < 25; i++) {
      this.rows.push({
        x: 0,
        y: 0,
        visible: false,
        timestamp: 0,
        startTime: 0,
        clickTime: 0
      })
    }

  }

  get getRows(): any[] {
    return this.rows;
  }

  registerUser(user: string) {

    this.username = user;
    this.registered = true;

  }
  showRandom() {
    if (this.visibleCounter < 4) {
      let randomIndex = Math.floor(Math.random() * this.rows.length);
      if (!this.rows[randomIndex].visible) {
        this.rows[randomIndex].visible = true;
        this.rows[randomIndex].startTime = new Date().getTime();
        this.visibleCounter++;
        setTimeout(() => {
          this.rows[randomIndex].visible = false;
          this.visibleCounter--;
          this.visibleSubject.next(this.rows);
        }, 4000);
      }
    }
  }


  startGame() {



    this.gameStarted = true;
    this.timer = setInterval(() => this.showRandom(), 2000);



    this.gameTimer = setTimeout(() => {
      clearInterval(this.timer);
      clearInterval(this.gameTimer);
      clearInterval(this.gameCount);
      this.gameStarted = false;
      this.timeLeft = 60;

      this.updateScores();
      this.points = 0;
      this.bestTime = 990;
    }, 60000);

    this.gameCount = setInterval(() => {
      this.timeLeft = this.timeLeft - 1;
    }, 1000);

  }

  clickGameobject(index: number) {

    // this.rows[index].visible = false;
    this.rows[index].clickTime = new Date().getTime() - this.rows[index].startTime;
    let selected = this.rows[index];
    if (selected.visible) {
      let currentTime = new Date().getTime();

      clearTimeout(this.rows[index].timestamp);
      this.rows[index].visible = false;
      this.visibleCounter--;
      this.visibleSubject.next(this.rows);
      this.points++;
      this.checkBestTime(this.rows[index].clickTime);

    }
  }

  checkBestTime(time:number){

    if(this.bestTime > time){
      this.bestTime = time;
    }

  }
  
  updateScores() {


    this.updateScore.addScore({
      name: this.username,
      points: this.points,
      bestTime: this.bestTime
    });

  }

}

export type MoleCol = {

  x: number,
  y: number,
  visible: boolean,
  timestamp: number,
  startTime: number,
  clickTime: number

}