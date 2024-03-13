import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-telalogin',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  usuario = '';
  senha = '';
  showError = false;

  constructor(private router:Router) {
    
  }

  onSubmit() {
    console.log('Usuário:', this.usuario);
    console.log('Senha:', this.senha);
    if (this.usuario === 'qajuda' && this.senha === 'qajuda') {
      alert('Teu login deu certo, TOPPER!')
      this.router.navigate(['/'])
    } else {
      this.showError = true;
    }
  }
}
