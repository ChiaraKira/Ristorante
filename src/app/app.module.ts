import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RistoranteListComponent } from './ristorante-list/ristorante-list.component';
import { RistoranteFormComponent } from './ristorante-form/ristorante-form.component';
import { RistoranteComponent } from './ristorante/ristorante.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RistoranteListComponent,
    RistoranteFormComponent,
    RistoranteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
