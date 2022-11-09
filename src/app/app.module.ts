import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostComponent } from './componentes/host/host.component';
import { OverEnlacesDirective } from './directivas/over-enlaces.directive';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    OverEnlacesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
