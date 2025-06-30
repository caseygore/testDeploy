import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {
 students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  goToAddStudent() {
    this.router.navigate(['/add-student']);
  }
}
