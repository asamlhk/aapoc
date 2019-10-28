import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../models';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  users$: Observable<User[]>;

  constructor(private ds: DataService) {
    this.users$ = ds.entities$;
  }

  ngOnInit() {
    this.getAll();
  }

  add(hero: any) {
    this.ds.add(hero);
  }

  delete(id) {
    console.log(id)
    this.ds.delete(id);
  }

  getAll() {
    this.ds.getAll();
  }
}
