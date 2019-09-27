import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdobeAnalyticService {

  constructor() { }

  public trackPage(path) {

    window['DataLayer'] = {
      'pagename': path
    }
    //window.TrackPageView();
    console.log(window['_satellite']);
    window['_satellite'].pageBottom();
    //window['_satellite'].trackEvent();
    window['_satellite'].track("TrackPageView")


    //window['_satellite'].track('trackpageview');

  }

  public trackEvent(event) {
    //console.log(event);
    window['DataLayer'] =
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
      }
    console.log('trackevent', window['DataLayer'])
    window['_satellite'].track("TrackEvent")
    //window['_satellite'].TrackEvent();
  }

}
