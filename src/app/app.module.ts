import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { IsEmptyPipe } from './shared/isempty.pipe';
import { GroupComponent } from './shared/group.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { KeyValueArrPipe } from './shared/keyvaluearr.pipe';
import { NewTableComponent } from './new-table/new-table.component';
import { routes } from 'src/routes';
import { RouterModule } from '@angular/router'
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './services/local-storage.service';
import { GeneratorComponent } from './generator/generator.component';
import { TableDataService } from './services/table-data.service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTabsModule } from '@angular/material/tabs'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    SidenavContentComponent,
    IsEmptyPipe,
    KeyValueArrPipe,
    NewTableComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,
    MatSnackBarModule,
    ClipboardModule,
    TextFieldModule,
    StorageServiceModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LocalStorageService, TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
