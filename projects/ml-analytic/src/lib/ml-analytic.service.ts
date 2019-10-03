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
    console.log(this.window);
    this.window.DataLayer = {
      pageName: path
    };
    console.log('page track:' + path);
    this.satellite.pageBottom();
    this.satellite.track('TrackPageView');
    this.satellite.cookie.set('cookie1', 'cookie1Value');
    this.satellite.logger.info('testing info');
  }

  public trackEvent(event) {
    console.log('track event');
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
