import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Hero } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService extends EntityCollectionServiceBase<Hero>  {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
