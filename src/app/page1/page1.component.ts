import { Component, OnInit } from '@angular/core';
import { AdobeAnalyticService } from '../adobe-analytic.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  constructor(private adobeSvc: AdobeAnalyticService) { }
  ngOnInit() {
  }
  click() {
    this.adobeSvc.trackEvent('testing event');
  }
}
