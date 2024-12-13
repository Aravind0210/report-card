
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-girls-score',
  standalone: true,
  imports: [CommonModule, DashboardScoreComponent],
  templateUrl: './girls-score.component.html',
  styleUrls: ['./girls-score.component.css'],
})
export class GirlsScoreComponent implements OnInit {
  girls: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    // Fetch girls from the service
    this.girls = this.studentService.getGirls();
  }
}
