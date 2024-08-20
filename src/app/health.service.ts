 import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

    constructor(private httpClient: HttpClient) { }

    getHealth() {
        return this.httpClient.get('https://tracker-api.benhalverson.workers.dev/health');
    }


}
