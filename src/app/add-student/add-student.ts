import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {
firstName = '';
  lastName = '';
  gpa = 0;
  enrollmentStatus = '';

constructor(private studentService: StudentService, private router: Router) {}

  save() {
  console.log('Save method triggered');  // sanity check

const newStudent = {
  StudentID: 0, // or a dummy value if it's auto-generated
  FirstName: this.firstName,
  LastName: this.lastName,
  GPA: this.gpa,
  EnrollmentStatus: this.enrollmentStatus
};


  this.studentService.addStudent(newStudent).subscribe({
    next: (res) => {
      console.log('Raw response:', res);
      this.router.navigate(['/']);
    },
    error: (err) => {
      console.error('Error adding student:', err);
      alert('Error adding student');
    }
  });
}
}
