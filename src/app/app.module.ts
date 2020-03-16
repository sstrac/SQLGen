import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material'
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
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
