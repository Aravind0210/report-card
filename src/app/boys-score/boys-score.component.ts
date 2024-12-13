import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StudentService } from '../student.service';
import { DashboardScoreComponent } from "../dashboard-score/dashboard-score.component";

@Component({
  selector: 'app-boys-score',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardScoreComponent],
  templateUrl: './boys-score.component.html',
  styleUrls: ['./boys-score.component.css'],
})
export class BoysScoreComponent implements OnInit {
  boys: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    // Fetch boys from the service
    this.boys = this.studentService.getBoys();
  }

}
