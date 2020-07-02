import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ManageTablesComponent } from './manage-tables.component';
import { NewTableComponent } from './new-table/new-table.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ManageTablesComponent}
]

@NgModule({
  declarations: [ ManageTablesComponent, NewTableComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageTablesModule { }
