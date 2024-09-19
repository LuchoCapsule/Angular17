import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NotFoundComponent } from './pages/shared/not-found/not-found.component'; 

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        title: 'Login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
        
    },
    {
        path:'backoffice',
        component: LayoutComponent,
        children: [
            {
                path:'employee',
                title: 'Employee',
                component: EmployeeComponent
            },
            {
                path: 'dashboard',
                title: 'Dashboard',
                pathMatch: 'full',
                loadComponent: () => import('./pages/dashboard/dashboard.component')
            }
        ]
    },
    {
        path: 'not-found',
        title: 'Not Found',
        component: NotFoundComponent 
    },
    {
        path: '**',
        redirectTo: 'not-found',
        title: 'Not Found'
    }

];
