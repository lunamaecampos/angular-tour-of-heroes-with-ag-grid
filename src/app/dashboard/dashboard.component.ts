import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ClockService } from '../clock.service'; //time component
import { TIME } from "../mock-clock";
import { interval } from 'rxjs';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]=[];
  time: Date; // time component
  obs$ = interval(1000);

  constructor(
    private heroService: HeroService,
    private clockService: ClockService
    ) { }

  ngOnInit(): void {
    this.getHeroes();
    this.obs$.subscribe((d)=> {
      this.getTime();
    })
  }

  updateTime(date:Date){
    this.time=date;
  }
  getTime(): void {
    const time:Date = new Date();
      this.time = time;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes =heroes.slice(1,5));

  }
}
