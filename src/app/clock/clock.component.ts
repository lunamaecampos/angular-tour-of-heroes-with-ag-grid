import { Component, OnInit } from '@angular/core';
import { interval } from "rxjs";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clockDisplay:Date;
  interval$ = interval(1000)
  
  constructor() { }

  ngOnInit(): void {
    this.interval$.subscribe(()=> {
      this.updateTime();
    })
  }
  updateTime(): void{
    const time = new Date();
    this.clockDisplay = time;

  }
}
