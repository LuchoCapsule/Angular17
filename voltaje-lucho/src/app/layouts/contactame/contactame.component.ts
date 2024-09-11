import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-contactame',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './contactame.component.html',
    styleUrl: './contactame.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactameComponent { }
