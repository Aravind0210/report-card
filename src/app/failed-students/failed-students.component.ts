import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-failed-students',
  imports: [CommonModule, DashboardScoreComponent],
  templateUrl: './failed-students.component.html',
  styleUrl: './failed-students.component.css'
})
export class FailedStudentsComponent implements OnInit {
  failedStudents :any[] = [];
  constructor(private studentService : StudentService){}
  ngOnInit() {
    this.failedStudents = this.studentService.getFailedStudents();
    
  }
}
