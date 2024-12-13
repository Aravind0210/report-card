import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { DashboardScoreComponent } from './app/dashboard-score/dashboard-score.component';
import { BoysScoreComponent } from './app/boys-score/boys-score.component';
import { GirlsScoreComponent } from './app/girls-score/girls-score.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddStudentComponent } from './app/add-student/add-student.component';
import { TotalMarksComponent } from './app/total-marks/total-marks.component';
import { FailedStudentsComponent } from './app/failed-students/failed-students.component';
import { HighestScoreStudentsComponent } from './app/highest-score-students/highest-score-students.component';
import { DeleteStudentComponent } from './app/delete-student/delete-student.component';

// Explicitly type the routes array as Routes
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardScoreComponent },
  { path: 'boys-score', component: BoysScoreComponent },
  { path: 'girls-score', component: GirlsScoreComponent },
  { path: 'addstudent', component: AddStudentComponent},
  { path: 'totalmarks', component: TotalMarksComponent},
  { path: 'failedstudent', component: FailedStudentsComponent},
  { path: 'highestscore', component: HighestScoreStudentsComponent},
  { path: 'deletestudent', component: DeleteStudentComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
  ],
}).catch((err) => console.error(err));
