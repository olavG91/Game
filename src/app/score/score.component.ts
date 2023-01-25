import { Component } from '@angular/core';
import { UpdateScoreService } from '../update-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  //Vilka kolumner ska vi visa i top 10
  displayedColumns: string[] = ['name', 'points'];

  //Vilka kolumner ska vi visa i snabbaste spelare
  displayedColumnsFast: string[] = ['name', 'points', 'bestTime'];

  //Spara ingående data från firebase
  dataSource;

  //Snabbaste spelaren
  fastestSource;

  //Högsta poäng sorterad
  bestPointsSource;

  //Ta in UpdateScoreService och prenumerera på getScores metoden.
  constructor(public updateScore: UpdateScoreService) {

    this.updateScore.getScores().subscribe(scores => {
      this.dataSource = scores;
      this.getFastest();
      this.getBestPoints();
    })




  }

  // Få ut snabbaste spelaren
  getFastest() {
    this.dataSource.sort((a, b) => a.bestTime - b.bestTime);
    this.fastestSource = this.dataSource;
    console.log("Yes");
    console.log(this.dataSource);
    console.log("Other");
    console.log(this.fastestSource);
  }

  // Sortera så att högst poäng hamnar först
  getBestPoints() {

    this.dataSource.sort((a, b) => b.points - a.points);
    this.bestPointsSource = this.dataSource.slice(0, 10);



  }

}



