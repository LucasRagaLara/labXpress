import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MenuComponent } from "../menu/menu.component";
import { FloatLabel } from 'primeng/floatlabel';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  imports: [MenuComponent, InputTextModule, FloatLabel],
})
export class ContactoComponent {

  constructor() {}

}
