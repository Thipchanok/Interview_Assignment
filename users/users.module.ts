// Import statements for components and services
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component'; // Import your UsersComponent
// Import other components and services if needed

@NgModule({
  declarations: [
    UsersComponent, // Declare UsersComponent here
    // Other components if any
  ],
  imports: [
    CommonModule
    // Other modules like FormsModule, ReactiveFormsModule, etc. if needed
  ],
  exports: [
    UsersComponent // Export UsersComponent if it needs to be used outside this module
  ]
})
export class UsersModule { }
