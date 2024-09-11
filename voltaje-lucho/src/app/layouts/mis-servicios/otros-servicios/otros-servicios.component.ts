import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-otros-servicios',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './otros-servicios.component.html',
    styleUrl: './otros-servicios.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OtrosServiciosComponent { }
