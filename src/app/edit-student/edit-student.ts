import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-student',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './edit-student.html',
  styleUrl: './edit-student.css'
})
export class EditStudent {

student: any = {
  StudentId: 0,
  FirstName: '',
  LastName: '',
  GPA: 0,
  EnrollmentStatus: ''
};

constructor(
  private route: ActivatedRoute,
  private studentService: StudentService,
  private router: Router
) {}

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.studentService.getStudentById(id).subscribe({
    next: (data) => {
      this.student = data;
    },
    error: (err) => {
      console.error('Failed to load student', err);
    }
  });
}

updateStudent() {
  this.studentService.updateStudent(this.student).subscribe(() => {
    this.router.navigate(['/']);
  });
}


}
