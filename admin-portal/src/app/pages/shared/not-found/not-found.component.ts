import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent implements OnInit {

  ngOnInit(): void { }

}
