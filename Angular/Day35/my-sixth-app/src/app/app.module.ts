import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    MdfDemoComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
