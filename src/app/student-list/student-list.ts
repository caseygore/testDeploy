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
    this.getStudents();
  }

  getStudents() {
        this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  goToAddStudent() {
    this.router.navigate(['/add-student']);
  }

  deleteStudent(studentId: number): void {
  if (confirm('Are you sure you want to delete this student?')) {
    this.studentService.deleteStudent(studentId).subscribe({
      next: () => {
        alert('Student deleted successfully.');
        this.getStudents(); // refresh the list
      },
      error: err => {
        console.error('Error deleting student:', err);
        alert('Failed to delete student.');
      }
    });
  }
}

}
