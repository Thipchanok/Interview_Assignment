// src/app/app.component.ts

import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component'; // Import your UsersComponent
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor directive

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsersComponent], // Make sure CommonModule is imported to use Angular directives
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'User Management'; // Title for the application
}
