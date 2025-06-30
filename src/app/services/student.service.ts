import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'https://bannerlite-api-a3ecaecmf2c8apgv.canadacentral-01.azurewebsites.net/api'; // Update this

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/GetStudents`);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateStudent`, student);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/GetStudentById?id=${id}`);
  }

addStudent(student: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/AddStudent`, student, {
    responseType: 'text' as 'json'
  });
}
}
