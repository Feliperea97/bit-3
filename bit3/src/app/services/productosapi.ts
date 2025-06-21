import { Injectable, inject } from '@angular/core';
import{ HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class productosapi {
  private apiUrl = 'https://www.freetogame.com/api/games';

  constructor(private httpClient: HttpClient) {}

  getGamesList() {
    return this.httpClient.get(this.apiUrl);
  }
}

