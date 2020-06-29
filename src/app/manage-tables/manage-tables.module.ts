import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ManageTablesComponent } from './manage-tables.component';

const routes: Routes = [
  { path: '', component: ManageTablesComponent}
]

@NgModule({
  declarations: [ ManageTablesComponent ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManageTablesModule { }
