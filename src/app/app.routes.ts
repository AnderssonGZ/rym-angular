import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'lista',
        loadComponent: () => import('./components/lista/lista.component').then(m => m.ListaComponent)
    }

];
