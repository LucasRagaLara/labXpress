import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass'
})
export class MenuComponent {
  menuOpen = false;

  // Función para alternar el estado del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}