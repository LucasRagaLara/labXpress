import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NuestraAppComponent } from './nuestra-app/nuestra-app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'nuestra-app', component: NuestraAppComponent },
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' },
];