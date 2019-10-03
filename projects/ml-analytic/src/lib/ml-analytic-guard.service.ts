import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MlAnalyticService } from './ml-analytic.service';


@Injectable({
  providedIn: 'root'
})
export class MlAnalyticGuardService implements CanActivate   {

  constructor(private svc: MlAnalyticService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> | boolean {
    const path = next.url[0].path;
    console.log(
      {
        trackpage: path
      }
    )
    this.svc.trackPage(path);
    return true;
  }
}
