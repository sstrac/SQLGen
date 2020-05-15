import { NgModule } from '@angular/core';
import { GeneratorComponent } from './generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', component: GeneratorComponent}
]

@NgModule({
    declarations: [
      GeneratorComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatOptionModule,
      MatSelectModule,
      MatChipsModule,
      MatSnackBarModule,
      ClipboardModule,
      TextFieldModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
    exports: [GeneratorComponent],
    providers: []
  })
  export class GeneratorModule { }