import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'generator', loadChildren: () => import('./app/generator-v2/generator-v2.module').then(m => m.GeneratorV2Module) },
    { path: 'manage-tables', loadChildren: () => import('./app/manage-tables/manage-tables.module').then(m => m.ManageTablesModule) }
    
]