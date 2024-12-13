import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-total-marks',
  standalone: true,
  imports: [CommonModule, DashboardScoreComponent],
  templateUrl: './total-marks.component.html',
  styleUrls: ['./total-marks.component.css'],
})
export class TotalMarksComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    // Fetch students from the service
    this.students = this.studentService.getStudents();
  }

  calculateTotalMarks(student: any): number {
    return student.scores.math + student.scores.english + student.scores.science;
  }
}
