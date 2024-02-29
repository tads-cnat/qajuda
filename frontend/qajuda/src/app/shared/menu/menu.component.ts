import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  termoBusca: string = '';

  constructor(private router: Router) {}

  buscarAcoes(): void {
    this.router.navigate(['/buscar'], {
      queryParams: {
        termo: this.termoBusca
      }
    });
  }
}
