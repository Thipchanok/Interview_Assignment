// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api/personalinfo'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  savePersonalInfo(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
