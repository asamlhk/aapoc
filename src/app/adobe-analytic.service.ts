import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '../../node_modules/@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AdobeAnalyticService {
  window;
  satellite;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
    this.satellite = this.window._satellite;
  }

  public trackPage(path) {
    console.log(this.window)
    this.window.DataLayer = {
      pageName: path
    };
    console.log('page track:' + path);
    this.satellite.pageBottom();

    this.satellite.track('TrackPageView');

  }

  public trackEvent(event) {
    //console.log(event);
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
    console.log('event track' + event);

    this.satellite.track('TrackEvent');
  }

}
