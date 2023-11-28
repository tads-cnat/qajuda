import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AprovarvoluntarioComponent } from './views/aprovarvoluntario/aprovarvoluntario.component';
import { DetalheacaoComponent } from './views/detalheacao/detalheacao.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aprovarvoluntario", component: AprovarvoluntarioComponent },
  { path: "detalhe", component: DetalheacaoComponent } //Implementar com caminho
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
