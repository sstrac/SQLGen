import { AppComponent } from './app/app.component';
import { NewTableComponent } from './app/new-table/new-table.component';
import { Routes } from '@angular/router';
import { GeneratorComponent } from './app/generator/generator.component';

export const routes: Routes = [
    { path: 'generator', loadChildren: () => import('./app/generator/generator.module').then(m => m.GeneratorModule) },
    { path: 'newtable', loadChildren: () => import('./app/new-table/new-table.module').then(m => m.NewTableModule) },
    { path: 'insertform', loadChildren: () => import('./app/insert-form/insert-form.module').then(m => m.InsertFormModule) },
    { path: 'managetables', loadChildren: () => import('./app/manage-tables/manage-tables.module').then(m => m.ManageTablesModule) }
]