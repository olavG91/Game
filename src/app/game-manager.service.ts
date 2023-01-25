import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UpdateScoreService } from './update-score.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  // Variabel för att veta om spelet är igång eller inte
  gameStarted: boolean = false;

  // Alla celler
  private rows: MoleCol[] = [];

  // Skapar en observable ifall rows ändras.
  private visibleSubject = new BehaviorSubject<MoleCol[]>([]);
  visible$ = this.visibleSubject.asObservable();

  // Räknare för hur många moles som visas just vid stunden
  private visibleCounter = 0;
  // Timer för att visa en random mole
  private timer;
  // Timer för spelet
  private gameTimer;
  // Snabbaste reaktionstid vid klick på en mole
  private bestTime = 990;
  // Nedräkning av sekunder för spelet
  private gameCount;
  timeLeft = 60;
  points = 0;
  // Kolla om användare är registrerad
  registered: boolean = false;
  // Användarnamn
  username: string = "";
  // Vid start skapa en array med 25st objekt
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
  // Returnera alla celler
  get getRows(): any[] {
    return this.rows;
  }
  // Spara ny användare
  registerUser(user: string) {

    this.username = user;
    this.registered = true;

  }
  // Visa slumpmässig mole
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

  // Ställ in speltimer vid start och nollställ när det är klart
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
  // Vid tryck på en mole hantera speldata
  clickGameobject(index: number) {

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
  // Kolla vilken tid som är snabbast
  checkBestTime(time:number){

    if(this.bestTime > time){
      this.bestTime = time;
    }

  }
  // Uppdatera score till firebase service
  updateScores() {


    this.updateScore.addScore({
      name: this.username,
      points: this.points,
      bestTime: this.bestTime
    });

  }

}
// Typ MoleCol
export type MoleCol = {

  x: number,
  y: number,
  visible: boolean,
  timestamp: number,
  startTime: number,
  clickTime: number

}