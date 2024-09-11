import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-home-servicios',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './home-servicios.component.html',
    styleUrl: './home-servicios.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeServiciosComponent implements OnInit {

    ngOnInit(): void { }

}
