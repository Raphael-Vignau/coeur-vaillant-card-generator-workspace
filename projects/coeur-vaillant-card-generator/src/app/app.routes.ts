import { Routes } from '@angular/router';
import { MetierComponent } from './pages/metier/metier.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'metier',
    },
    {
        path: 'metier',
        component: MetierComponent,
    },
    {
        path: '**',
        redirectTo: 'metier',
    },
];
