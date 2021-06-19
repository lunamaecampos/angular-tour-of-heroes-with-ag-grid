import { Injectable } from '@angular/core';
import { Observable, of, timer } from "rxjs";
import { TIME } from "./mock-clock";


@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  // getTime(): Date {
  //   return TIME;
  // }
  getTime(): Observable<Date>{
    const date = of(TIME)
    return date;
  }
}
