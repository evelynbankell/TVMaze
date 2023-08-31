import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-score',
  templateUrl: './show-score.component.html',
  styleUrls: ['./show-score.component.scss']
})
export class ShowScoreComponent implements OnInit {
  @Input() score: number = 0;
  @Input() resultPage: boolean = false;

  maxStar: number = 10;
  showStar: string = "";
  integerStars: number = 0;
  leftStars: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.resultPage) {
      this.score *= 10;
    }
    
    this.showStar = this.score.toString();
    var number_to_array = this.showStar.split(".");
    this.integerStars = Number(number_to_array[0]);
    this.leftStars = this.maxStar - this.integerStars;
  }

  counter(i: number) {
    return new Array(i);
  }
}
