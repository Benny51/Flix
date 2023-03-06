import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlixHomeComponent } from './flix-home/flix-home.component';
import { FlixInscriptionComponent } from './inscription/flix-inscription/flix-inscription.component';
import { FlixInscriptionFormComponent } from './inscription/flix-inscription-form/flix-inscription-form.component';
import { FlixConnectionFormComponent } from './connection/flix-connection-form/flix-connection-form.component';
import { FlixConnectionComponent } from './connection/flix-connection/flix-connection.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlixHeaderComponent } from './flix-header/flix-header.component';
import { FlixFooterComponent } from './flix-footer/flix-footer.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FlixHomeComponent,
    FlixInscriptionComponent,
    FlixInscriptionFormComponent,
    FlixConnectionFormComponent,
    FlixConnectionComponent,
    FlixHeaderComponent,
    FlixFooterComponent,
    AnimeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
