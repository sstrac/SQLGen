import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { routes } from 'src/routes';
import { RouterModule, RouteReuseStrategy } from '@angular/router'
import { LocalStorageService } from './services/local-storage.service';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTabsModule } from '@angular/material/tabs'
import { SQLGenReuseStrategy } from './shared/sqlgen-route-reuse-strategy';
import { HttpClientModule } from '@angular/common/http'
import { TablesInteractor } from './services/tables-interactor.service';
import { GeneratorV2Module } from './generator-v2/generator-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    GeneratorV2Module,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [LocalStorageService, TablesInteractor, { provide: RouteReuseStrategy, useClass: SQLGenReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
