import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdobeAnalyticService } from './adobe-analytic.service';

@Injectable({
  providedIn: 'root'
})
export class AdobeGuardService implements CanActivate {

  constructor(private adobeSvc: AdobeAnalyticService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
    const path = next.url[0].path;
    this.adobeSvc.trackPage(path);
    return true;
  }
}
