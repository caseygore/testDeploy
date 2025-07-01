import { Routes } from '@angular/router';
import { AppComponent } from './app';
import { AddStudent } from './add-student/add-student';
import { StudentList } from './student-list/student-list';
import { EditStudent } from './edit-student/edit-student';
import { BannerReport } from './banner-report/banner-report';
import { Portfolio } from './portfolio/portfolio';


export const routes: Routes = [
  { path: '', component: StudentList },
  { path: 'add-student', component: AddStudent},
  { path: 'edit-student/:id', component: EditStudent},
  { path: 'banner-report', component: BannerReport},
  { path: 'portfolio', component: Portfolio}

];
