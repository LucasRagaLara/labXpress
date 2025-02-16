import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from "../menu/menu.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true, 
  imports: [
    MenuComponent, 
    CarouselModule,
    ButtonModule,
    TagModule,
    CommonModule
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass'],
})
export class InicioComponent implements OnInit {

  images: any[] | undefined;
  responsiveOptions: any[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.images = [
      {
        contentType: "carousel1",
        src: 'assets/carousel/furgoneta_carousel.png',
        alt: 'Furgoneta movil',
        title: 'Resultats ràpids, salut sense espera',
        description: 'La nostra furgoneta mòbil porta les proves mèdiques a la teva porta...',
        icono1: "assets/carousel/carousel1/furgoneta-de-reparto.png",
        icono2: "assets/carousel/carousel1/casa.png",
        icono3: "assets/carousel/carousel1/microbiologia.png",
        actionText: 'Coneix els nostres serveis',
        link: '/servicios'
      },
      {
        contentType: "carousel2",
        src: 'assets/carousel/furgoneta-interior-min.jpg',
        alt: 'App mòbil',
        title: "Estem a l'última!",
        description: "L'interior de les nostres furgonetes compta amb la tecnologia més avançada...",
        description2: "A més, l'interior està dissenyat per oferir la màxima comoditat...",
        icono1: "assets/carousel/carousel2/no-virus.png",
        icono2: "assets/carousel/carousel2/pregnancy-test.png",
        icono3: "assets/carousel/carousel2/pacemaker.png",
        icono4: "assets/carousel/carousel2/apartment.png",
        icono5: "assets/carousel/carousel2/convenient.png"
      },
      {
        contentType: "carousel3",
        src: 'assets/carousel/Merchandasing-min.png',
        alt: "T'agrada el merchandising?",
        title: "T'agrada el merchandising?",
        description1: "Vols algun merchandising original? Tenim una selecció exclusiva per a tu!",
        description2: "Des de botes personalitzades fins a tasses i bolis en forma de pipeta...",
        icono1: "assets/carousel/carousel3/cuaderno.png",
        icono2: "assets/carousel/carousel3/pipeta.png",
        icono3: "assets/carousel/carousel3/cafe.png",
        icono4: "assets/carousel/carousel3/llavero.png"
      },
      {
        contentType: "carousel4",
        src: 'assets/carousel/Folleto-min.png',
        alt: 'Oferta especial',
        title: "Tens algún Dubte?",
        description: 'Aprofita les nostres promocions en proves mèdiques.',
        actionText: 'Més informació',
        link: '/contacto'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  navigate(url: string): void {
    this.router.navigate([url]);
  }

}