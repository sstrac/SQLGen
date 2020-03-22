import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatAutocompleteModule, MatOptionModule, MatDividerModule, MatCardModule, MatSelectModule, MatCheckboxModule, MatTabsModule, MatChipsModule } from '@angular/material'
import { IsEmptyPipe } from './shared/isempty.pipe';
import { GroupComponent } from './shared/group.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { KeyValueArrPipe } from './shared/keyvaluearr.pipe';
import { InsertComponent } from './statements/insert.component';
import { SelectComponent } from './statements/select.component';
import { NewTableComponent } from './new-table/new-table.component';
import { routes } from 'src/routes';
import { RouterModule } from '@angular/router'
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './services/local-storage.service';
import { GeneratorComponent } from './generator/generator.component';
import { TableDataService } from './services/table-data.service';
import { PracticeComponent } from './practice.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    SidenavContentComponent,
    IsEmptyPipe,
    KeyValueArrPipe,
    InsertComponent,
    SelectComponent,
    NewTableComponent,
    GeneratorComponent,
    SelectComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,
    StorageServiceModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LocalStorageService, TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
