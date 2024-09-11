import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {

    ngOnInit(): void { }

}
