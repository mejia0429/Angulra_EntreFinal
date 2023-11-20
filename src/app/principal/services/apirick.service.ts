import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirickService {

  private baseUrl = 'https://rickandmortyapi.com/api/';
  options = {
    headers: new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      }
    )
  }

  constructor(private http: HttpClient) { }
  getCharacters() {
    return this.http.get(this.baseUrl+'character', this.options)
  }
}
