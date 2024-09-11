import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-service-02',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './service02.component.html',
    styleUrl: './service02.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Service02Component { }
