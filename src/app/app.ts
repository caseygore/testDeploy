import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ STEP 1: Add this
import { Student } from './models/student.model';
import { StudentService } from './services/student.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [CommonModule, RouterModule],  // ✅ STEP 2: Add this here
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

}

// 👇 Needed for bootstrapApplication() in main.ts
export const App = AppComponent;
