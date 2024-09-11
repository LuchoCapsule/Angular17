import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-service-01',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './service01.component.html',
    styleUrl: './service01.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Service01Component implements OnInit {

    ngOnInit(): void { }
    

}
