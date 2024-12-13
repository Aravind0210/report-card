import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard-score',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-score.component.html',
  styleUrl: './dashboard-score.component.css'
})
export class DashboardScoreComponent {

}
