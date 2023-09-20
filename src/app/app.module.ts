import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { PublicidadeComponent } from './components/publicidade/publicidade.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardComponent,
    MenuNavComponent,
    PublicidadeComponent,
    ConteudoComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
