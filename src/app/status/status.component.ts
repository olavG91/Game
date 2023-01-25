import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  // Inputs för att deklarera poäng och tid kvar
  @Input() points:number = 0;
  @Input() timeLeft:number = 0;

}
