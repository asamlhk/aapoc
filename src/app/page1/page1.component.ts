import { Component, OnInit } from '@angular/core';
import { MlAnalyticService } from 'ml-analytic';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  constructor(
    private svc: MlAnalyticService,
) { }
  ngOnInit() {
     }
  click() {
    this.svc.trackEvent('testing event');
  }
}
