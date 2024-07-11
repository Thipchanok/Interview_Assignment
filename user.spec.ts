// src/app/user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user'; // สมมติว่ามี interface User สำหรับข้อมูลผู้ใช้

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8000/users'; // URL ของ Golang API ที่คุณใช้

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // สามารถเพิ่ม methods อื่นๆ เพื่อทำงานกับ API ของคุณตามต้องการได้
}
