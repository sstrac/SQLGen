import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule, MatAutocompleteModule, MatFormField, MatOptionModule, MatDividerModule, MatCardModule } from '@angular/material'
import { InsertComponent } from './insert/insert.component';
import { IsEmptyPipe } from './shared/isempty.pipe';
import { GroupComponent } from './shared/group.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    GroupComponent,
    SidenavContentComponent,
    IsEmptyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
