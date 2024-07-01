import { Injectable } from '@angular/core';
import data from '../data/experience.json';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getData() {
    return data
  }
}
