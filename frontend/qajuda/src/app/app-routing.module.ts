import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AprovarvoluntarioComponent } from './views/aprovarvoluntario/aprovarvoluntario.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "aprovarvoluntario", component: AprovarvoluntarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
