import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MlAnalyticGuardService {

  constructor() { }

  readme() {
    return 'guard';
  }
}
