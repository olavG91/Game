import { Component } from '@angular/core';
import { UpdateScoreService } from '../update-score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {

  displayedColumns: string[] = ['name', 'points'];
  displayedColumnsFast: string[] = ['name', 'points', 'bestTime'];
  dataSource;
  fastestSource;
  bestPointsSource;

  constructor(public updateScore: UpdateScoreService){

    this.updateScore.getScores().subscribe(scores => {
      this.dataSource = scores;
      this.getFastest();
      this.getBestPoints();
    })




  }

  getFastest(){
    this.dataSource.sort((a,b) => a.bestTime - b.bestTime);
    this.fastestSource = this.dataSource[0];
    console.log("Yes");
    console.log(this.dataSource);
    console.log("Other");
    console.log(this.fastestSource);
  }

  getBestPoints(){

    this.dataSource.sort((a,b) => b.points - a.points);
    this.bestPointsSource = this.dataSource.slice(0, 10);
    

  }

}



