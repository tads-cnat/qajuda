import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardDestaqueComponent } from './shared/card-destaque/card-destaque.component';
import { AprovarvoluntarioComponent } from './views/aprovarvoluntario/aprovarvoluntario.component';
import { CardcolaboradorComponent } from './shared/cardcolaborador/cardcolaborador.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalheacaoComponent } from './views/detalheacao/detalheacao.component';
import { AceiteComponent } from './views/aceite/aceite.component';
import { BuscarComponent } from './views/buscar/buscar.component';
import { RodapeComponent } from './shared/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    CardDestaqueComponent,
    AprovarvoluntarioComponent,
    CardcolaboradorComponent,
    HomeComponent,
    DetalheacaoComponent,
    AceiteComponent,
    BuscarComponent,
    RodapeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
