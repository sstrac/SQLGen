import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionFormFieldComponent } from './option-form-field.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [OptionFormFieldComponent],
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule
    
  ],
  exports: [OptionFormFieldComponent]
})
export class OptionFormFieldModule { }
