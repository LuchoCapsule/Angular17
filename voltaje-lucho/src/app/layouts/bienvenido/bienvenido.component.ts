import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
    selector: 'app-bienvenido',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './bienvenido.component.html',
    styleUrl: './bienvenido.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BienvenidoComponent {
    public menu = routes.map((route) => route).flat();

    constructor() { 
        console.log(this.menu);
    }

 }
