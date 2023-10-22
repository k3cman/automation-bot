import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BotModule} from "./features/bot/bot.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
