import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdateScoreService {

  scoreList!: AngularFirestoreCollection<Stats>;
  scores: any;

  constructor(
    private __afs: AngularFirestore,
  ) { 
    this.scoreList = this.__afs.collection('scores');


    this.getScores();

  }

  getScores(){
    return this.scoreList.snapshotChanges().pipe(
        map(scores => {
            return scores.map(score => {
                const data = score.payload.doc.data();
                const id = score.payload.doc.id;
                return { id, ...data };
            });
        })
    );
}




  addScore(newScore:Stats) {

    this.scoreList.add(newScore)
      .then(() => {
        newScore = {} as Stats;
        console.log("Score added");
      })
      .catch(error => {
        console.log('Error adding score: ', error);
      })

  }



}

export type Stats = {

  name: string,
  points: number,
  bestTime: number

}