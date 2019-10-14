import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'analyticPoC';
  @ViewChild('contentArea', {
    static: true
  })
  private contentArea: ElementRef<HTMLMainElement>;



  constructor(
    private router: Router
  ) {
    this.router.events.forEach(
      e => {
        console.log(e);
        console.log(this.contentArea);
      }
    );
  }

  ngOnInit() {
    console.log(this.contentArea);
  }

}
