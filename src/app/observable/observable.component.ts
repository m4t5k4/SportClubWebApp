import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, tap, take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  counterMap: number;
  constructor() { }

  // Observable
  obs$ = new Observable<number>(observer => {
    setInterval(() => {
      const rnd = Math.floor(Math.random() * 100);
      observer.next(rnd);
    }, 1000);
    setTimeout(() => {
      observer.complete();
      console.log('Observer stops on complete');
    }, 15001);
  });

  // map
  subscriptionMap = this.obs$
    .pipe(
      map((c: number) => c * 100)
    )
    .subscribe(data => {
      this.counterMap = data;
    });

  // filter
  getallen$ = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0)
    ).subscribe(x => console.log(x));

  // filter tap
  getallen2$ = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      tap(t => console.log('filter: ' + t))
    ).subscribe();

  // take tap
  getallen3$ = of(1, 2, 3, 4, 5)
    .pipe(
      take(2),
      tap(t => console.log('take: ' + t)),
    ).subscribe();

  // take tap finalize
  getallen4$ = of(1, 2, 3, 4, 5)
    .pipe(
      take(2),
      tap(t => console.log('take: ' + t)),
      finalize(() => console.log("Completed!"))
    ).subscribe();

  // map met if & errorHandling
  errorHandling$ = of(1, 2, 3, 4, 5)
    .pipe(
      map((c: number) => {
        if (c === 5) {
          throw new Error("5 has an error!");
        }
        return c;
      })
    ).subscribe(
      result => console.log(result),
      error => console.log(error)
    );

  ngOnInit(): void {
  }

}
