import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdobeAnalyticService {

  constructor(private window: Window) { }

  public trackPage(path) {
 
    this.window['DataLayer'] = {
      pagename: path
    };

    this.window['_satellite'].pageBottom();

    this.window['_satellite'].track("TrackPageView")

  }

  public trackEvent(event) {
    //console.log(event);
    this.window['DataLayer'] =
      {
        'distributortype': 'agency',
        'advisorid': 'sample-agentid',
        'customerid': 'sample-customerid',
        'referralid': 'sample-referralid',
        'goals': 'goal1, goal2, goal3',
        'ridertype': 'rider1, rider2, rider3',
        'event_category': 'sample event cate',
        'event_type': 'sample event type',
        'event_label': event
      };

      this.window['_satellite'].track("TrackEvent");
  }

}
