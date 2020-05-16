import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTablesComponent } from './manage-tables.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', component: ManageTablesComponent }
]

@NgModule({
  declarations: [ManageTablesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  exports: [ManageTablesComponent]
})
export class ManageTablesModule { }
