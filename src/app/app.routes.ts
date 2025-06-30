import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { AddStudent } from './add-student/add-student';
import { StudentList } from './student-list/student-list';


export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add-student', component: AddStudent}

];
