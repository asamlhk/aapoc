import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MliAnalyticsService } from '@mli/analytics';

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
    private router: Router,
    private mliAnalytics: MliAnalyticsService
  ) {
    this.mliAnalytics.enableAutoPageTracking();
    this.router.events.forEach(
      e => {
      }
    );
  }

  ngOnInit() {
    console.log(this.contentArea);
  }

}
