import { AppComponent } from './app/app.component';
import { NewTableComponent } from './app/new-table.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'app', component: AppComponent },
    { path: 'newtable', component: NewTableComponent }
]