import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { GeneralComponent } from './components/general/general.component';
import { AppRoutingModule } from './app-routing.module';
import { SpainComponent } from './components/spain/spain.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SpainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
