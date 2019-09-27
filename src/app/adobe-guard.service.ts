import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { AdobeAnalyticService } from './adobe-analytic.service';

@Injectable({
  providedIn: 'root'
})
export class AdobeGuardService implements CanActivate {

  constructor(private adobeSvc: AdobeAnalyticService) { }
  canActivate(data) {
    let path = data.url[0].path;
    this.adobeSvc.trackPage(path);

 
    return true;
  }
}
