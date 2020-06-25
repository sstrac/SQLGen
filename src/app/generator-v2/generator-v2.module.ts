import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorV2Component } from './generator-v2.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OptionFormFieldModule } from '../shared/option-form-field/option-form-field.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertFormModule } from '../shared/insert-form/insert-form.module';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar'
const routes: Routes = [
  { path: '', component: GeneratorV2Component}
]

@NgModule({
  declarations: [
    GeneratorV2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OptionFormFieldModule,
    InsertFormModule,
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    ClipboardModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneratorV2Module { }
