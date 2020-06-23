import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeneratorV2Component } from './generator-v2.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'
import {MatDividerModule} from '@angular/material/divider';
import { OptionFormFieldModule } from '../shared/option-form-field/option-form-field.module';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    TextFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatDividerModule,
    ClipboardModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneratorV2Module { }
