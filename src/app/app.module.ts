import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ConversorModule } from './conversor';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    ConversorModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
