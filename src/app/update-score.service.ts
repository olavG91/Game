import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdateScoreService {
  // Referens till samling av objekt
  scoreList!: AngularFirestoreCollection<Stats>;
  // Lagra samlingen
  scores: any;
  // Skapa en referens till Firebase
  constructor(
    private __afs: AngularFirestore,
  ) {
    this.scoreList = this.__afs.collection('scores');

    this.getScores();

  }
  // Returnera score
  getScores() {
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
  // Lägg till ny score
  addScore(newScore: Stats) {

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