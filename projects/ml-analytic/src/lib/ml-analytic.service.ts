import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MlAnalyticService {

  window;
  satellite;

  constructor(@Inject(DOCUMENT) private document: any) {
    this.window = this.document.defaultView;
    this.satellite = this.window._satellite;
  }

  public trackPage(path) {
    this.window.DataLayer = {
      pageName: path
    };
    console.log({pageTrack : this.window.DataLayer});
    this.satellite.pageBottom();
    this.satellite.track('TrackPageView');
  }

  public trackEvent(event) {
    this.window.DataLayer = {
      distributortype: 'agency',
      advisorid: 'sample-agentid',
      customerid: 'sample-customerid',
      referralid: 'sample-referralid',
      goals: 'goal1, goal2, goal3',
      ridertype: 'rider1, rider2, rider3',
      event_category: 'sample event cate',
      event_type: 'sample event type',
      event_label: event
    };
    console.log({
      eventTracking: this.window.DataLayer
    });
    this.satellite.track('TrackEvent');
  }
}
