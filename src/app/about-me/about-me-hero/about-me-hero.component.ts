import { Person } from './../../_models/Person';
import { transition, trigger, animate, style, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import person from '../../_configAboutMe';

@Component({
  selector: 'app-about-me-hero',
  templateUrl: './about-me-hero.component.html',
  styleUrls: ['./about-me-hero.component.css'],
  animations: [
    trigger(
      'valueChanged',
      [
          transition('void => *', []),
          transition('* => void', []),
          transition('* => *', [
              animate(1000, keyframes([
                  style ({ opacity: 0.0, offset: 0.0 }),
                  style ({ opacity: 1.0, offset: 1.0 }),
              ])),
          ]),
      ]),
  ]
})
export class AboutMeHeroComponent implements OnInit {
  public currentTitle: string = "Software Engineer"
  private myTimer: any;

  public person: Person = person

  constructor() { 

  }

  ngOnInit() {
    this.startTime();
  }

  getRandomValue(): string {
    return this.person.titles[Math.floor(Math.random() * this.person.titles.length)];
  }

  startTime(): void {
    this.myTimer = setInterval(() => {
      this.setNewTitle();
    }, 3000);
  }

  setNewTitle(): void
  {
    let randomValue = this.getRandomValue();

    if (randomValue === this.currentTitle) {
      clearInterval(this.myTimer);
      this.setNewTitle();
      this.startTime();
    } else {
      this.currentTitle =  randomValue;
    }

  }
  

}
