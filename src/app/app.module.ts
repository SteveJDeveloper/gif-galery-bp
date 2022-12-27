import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GifCardComponent } from './components/organisms/gif-card/gif-card.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { GifGaleryComponent } from './components/pages/gif-galery/gif-galery.component';

@NgModule({
  declarations: [
    AppComponent,
    GifCardComponent,
    HeaderComponent,
    GifGaleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
