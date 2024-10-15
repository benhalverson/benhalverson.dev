import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  constructor(private readonly httpClient: HttpClient) {}

  getData(): Observable<any> {
    return this.httpClient.get('/assets/experience.json');
  }
}
