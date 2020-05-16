import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { OptionFormFieldComponent } from './option-form-field/option-form-field.component';
import { MapPipe } from './map.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
      GroupComponent,
      OptionFormFieldComponent,
      MapPipe
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule
    ],
    exports: [GroupComponent, OptionFormFieldComponent, MapPipe],
    providers: []
  })
  export class SharedModule { }
  