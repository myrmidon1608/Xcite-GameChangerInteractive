import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { BaseAttributesComponent } from './attributes/base-attributes/base-attributes.component';
import { ImportComponent } from './admin/import/import.component';
import { ExportComponent } from './admin/export/export.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    BaseAttributesComponent,
    ImportComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
