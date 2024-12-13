import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-delete-student',
  imports: [CommonModule, RouterModule, DashboardScoreComponent],
  
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css'],
})
export class DeleteStudentComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.refreshStudents();
  }

  // Refresh the student list
  refreshStudents(): void {
    this.students = this.studentService.getStudents();
  }

  // Delete student by ID
  deleteStudentById(id: number): void {
    this.studentService.deleteStudentById(id);
    this.refreshStudents(); // Update the list after deletion
  }
}
