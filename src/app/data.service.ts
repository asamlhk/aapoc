import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class DataService extends EntityCollectionServiceBase<Hero>  {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
