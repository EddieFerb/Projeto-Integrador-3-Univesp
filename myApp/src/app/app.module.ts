import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    // Seus componentes, diretivas, e pipes aqui
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Adicione esta linha
    // Outros módulos importados aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
