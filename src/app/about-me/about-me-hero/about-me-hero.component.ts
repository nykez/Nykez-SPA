import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-about-me-hero',
  templateUrl: './about-me-hero.component.html',
  styleUrls: ['./about-me-hero.component.css']
})
export class AboutMeHeroComponent implements OnInit {
  words: string[] =
  [
    "Software Engineer",
    "a human being",
    "Avid Programmer",
    "a gamer",
    "gmodstore curator",
    "gmodstore creator",
    "workshop creator",
  ]

  currentTitle: string = "Software Engineer"

  private myTimer: any;

  constructor() { 

  }

  ngOnInit() {
    this.startTime();
  }

  getRandomValue(): string {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  startTime(): void {
    this.myTimer = setInterval(() => {
      this.setNewTitle();
    }, 5000);
  }

  setNewTitle(): void
  {

    let randomValue = this.words[Math.floor(Math.random() * this.words.length)];
    if (randomValue === this.currentTitle) {
      clearInterval(this.myTimer);
      this.setNewTitle();
      this.startTime();
    }
    else{
      this.currentTitle =  this.words[Math.floor(Math.random() * this.words.length)];
    }
  }
  

}
