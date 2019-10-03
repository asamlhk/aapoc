import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MlAnalyticService {

  window;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject('analyticUrl') private path: string
  ) {
    this.window = document.defaultView;
    //const path = '//assets.adobedtm.com/launch-EN23e9d69d68314fb4a99e61bc7e3ff367.min.js';
console.log(path)
    const node = this.document.createElement('script');
    node.src = path;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  public trackPage(path) {
    this.window.DataLayer = {
      pageName: path
    };
    console.log({ pageTrack: this.window.DataLayer });
    this.window._satellite.pageBottom();
    this.window._satellite.track('TrackPageView');
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
    this.window._satellite.track('TrackEvent');
  }
}
