import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from '../../../node_modules/rxjs';
import { Hero } from '../models';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  users$: Observable<Hero[]>;

  constructor(private ds: DataService) {
    this.users$ = ds.entities$;
    this.users$.subscribe(
      x => {
        console.log(x)
      }
    )
  }

  ngOnInit() {
    this.getAll();
  }

  add(hero: any) {
    this.ds.add(hero);
  }

  delete(id) {
    this.ds.delete(id);
  }

  getAll() {
    this.ds.getAll();
  }
}
