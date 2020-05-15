import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from 'src/routes';
import { RouterModule, RouteReuseStrategy } from '@angular/router'
import { LocalStorageService } from './services/local-storage.service';
import { TableDataService } from './services/table-data.service';
import { MatToolbarModule } from '@angular/material/toolbar'
import { NewTableModule } from './new-table/new-table.module';
import { GeneratorModule } from './generator/generator.module';
import { MatTabsModule } from '@angular/material/tabs'
import { SQLGenReuseStrategy } from './shared/sqlgen-route-reuse-strategy';
import { ManageTablesModule } from './manage-tables/manage-tables.module';
import { OptionFormFieldComponent } from './shared/option-form-field/option-form-field.component';
import { MapPipe } from './shared/map.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    NewTableModule,
    GeneratorModule,
    ManageTablesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [LocalStorageService, TableDataService, { provide: RouteReuseStrategy, useClass: SQLGenReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
