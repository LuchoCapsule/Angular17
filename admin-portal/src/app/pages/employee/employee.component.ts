import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent { }
