import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AprovarvoluntarioComponent } from './views/aprovarvoluntario/aprovarvoluntario.component';
import { DetalheacaoComponent } from './views/detalheacao/detalheacao.component';
import { AceiteComponent } from './views/aceite/aceite.component';
import { BuscarComponent } from './views/buscar/buscar.component';
import { CriaracaoComponent } from './views/criaracao/criaracao.component';
import { TelaloginComponent } from './views/telalogin/telalogin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'colaborador_acao/acao/:acao_id',
    component: AprovarvoluntarioComponent
  },
  { path: 'detalhe/:id', component: DetalheacaoComponent },
  { path: 'aceite', component: AceiteComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'criaracao', component: CriaracaoComponent },
  { path: 'login', component: TelaloginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
