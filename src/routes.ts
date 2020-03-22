import { AppComponent } from './app/app.component';
import { NewTableComponent } from './app/new-table/new-table.component';
import { Routes } from '@angular/router';
import { GeneratorComponent } from './app/generator/generator.component';

export const routes: Routes = [
    { path: 'generator', component: GeneratorComponent },
    { path: 'newtable', component: NewTableComponent }
]