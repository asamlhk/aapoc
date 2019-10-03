import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlAnalyticService {

  window;
  script = {
    url: '',
    loaded: false
  };


  constructor(
    @Inject('analyticUrl') private path: string
  ) {
    this.window = document.defaultView;
    this.script.url = path;
    this.loadScript();
  }

  loadScript(): Promise<any> {
    return new Promise(
      (success, reject) => {
        if (this.script.loaded) {
          success(true);
        } else {
          const node = document.createElement('script');
          node.src = this.script.url;
          node.type = 'text/javascript';
          node.async = true;
          node.charset = 'utf-8';
          document.getElementsByTagName('head')[0].appendChild(node);
          node.onload = () => {
            this.script.loaded = true;
            success(true);
          };
        }
      }
    );
  }

  public trackPage(path) {
    this.loadScript().then(
      success => {
        this.window.DataLayer = {
          pageName: path
        };
        console.log({ pageTrack: this.window.DataLayer });
        this.window._satellite.pageBottom();
        this.window._satellite.track('TrackPageView');
      }
    );
  }

  public trackEvent(event) {
    this.loadScript().then(
      success => {
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
      });
  }
}
