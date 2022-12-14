import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CotacaoService } from './cotacao.service';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent],
  providers:    [HttpClientModule,CotacaoService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
