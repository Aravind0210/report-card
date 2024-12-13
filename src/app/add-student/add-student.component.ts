import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";
// import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DashboardScoreComponent
],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  newStudent = {
    name: '',
    gender: '',
    scores: {
      math: null,
      english: null,
      science: null,
    },
  };
  constructor(private studentService: StudentService) {}

  addStudent() {
    console.log('New student added:', this.newStudent);
    this.studentService.addStudent({ ...this.newStudent });
    alert(`Student ${this.newStudent.name} added successfully!`);
    // Reset the form
    this.newStudent = {
      name: '',
      gender: '',
      scores: {
        math: null,
        english: null,
        science: null,
      },
    };
  }
}
