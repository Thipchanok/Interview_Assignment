// src/app/users/users.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Adjust the path according to your project structure
import { User } from '../user'; // Adjust the path according to your project structure

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
