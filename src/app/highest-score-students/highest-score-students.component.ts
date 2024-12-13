import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-highest-score-students',
  imports: [CommonModule, DashboardScoreComponent],
  templateUrl: './highest-score-students.component.html',
  styleUrl: './highest-score-students.component.css'
})
export class HighestScoreStudentsComponent implements OnInit {
 highestScore :  any[]=[];

 constructor(private studentService : StudentService){}

ngOnInit() {
  this.highestScore = this.studentService .getHighestScoreStudent();
} 
}


