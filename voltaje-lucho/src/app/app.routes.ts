import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Bienvenido',
        loadComponent: () => import('./layouts/bienvenido/bienvenido.component'),        
    },
    {
        path: 'mis-servicios',
        title: 'Mis Servicios',
        loadComponent: () => import('./layouts/mis-servicios/home-servicios.component'),
        children: [
            {
                path: 'servicio-1',
                title: 'Servicio 1',
                loadComponent: () => import('./layouts/mis-servicios/service01/service01.component'),
            },
            {
                path: 'servicio-2',
                title: 'Servicio 2',
                loadComponent: () => import('./layouts/mis-servicios/service02/service02.component'), 
            },
            {
                path: 'otros-servicios',
                title: 'Otros Servicios',
                loadComponent: () => import('./layouts/mis-servicios/otros-servicios/otros-servicios.component'),
            },
        ]
    },
];
