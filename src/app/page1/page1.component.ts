import { Component, OnInit } from '@angular/core';
import { MlAnalyticService } from 'ml-analytic';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  foods  = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(
    private svc: MlAnalyticService,
  ) { }
  ngOnInit() {
  }
  click() {
    this.svc.trackEvent('testing event');
  }
}
