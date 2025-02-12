import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag, TagModule } from 'primeng/tag';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inicio',
  imports: [
    MenuComponent, 
    CarouselModule,
    ButtonModule,
    TagModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.sass'
})
export class InicioComponent {
  images = [
    {
      contentType: "carousel1",
      src: 'images/carousel/furgoneta_carousel.png',
      alt: 'Furgoneta movil',
      title: 'Resultats ràpids, salut sense espera',
      description: 'La nostra furgoneta mòbil porta les proves mèdiques a la teva porta, oferint un servei ràpid, còmode i segur. Amb tecnologia davantguarda i professionals especialitzats, garantim resultats fiables sense que hagis de desplaçar-te. La teva salut, sense esperes!',
      actionText: 'Coneix els nostres serveis',
      link: '/servicios'
    },
    {
      contentType: "carousel2",
      src: 'images/carousel/furgoneta-interior-min.jpg',
      alt: 'App mòbil',
      title: 'Gestió fàcil a l\'app',
      description: 'Consulta els resultats i gestiona les cites des del teu mòbil.',
      actionText: 'Descarrega l\'app',
      link: '/app'
    },
    {
      contentType: "carousel3",
      src: 'images/carousel/Merchandasing-min.png',
      alt: "T'agrada el merchandising?",
      title: "T'agrada el merchandising?",
      description: '"Ràpid, còmode i segur. Em va encantar el servei!"',
      actionText: 'Llegeix més testimoni',
      link: '/testimonis'
    },
    {
      contentType: "carousel4",
      src: 'images/carousel/Folleto-min.png',
      alt: 'Oferta especial',
      title: "Tens algún Dubte?",
      description: 'Aprofita les nostres promocions en proves mèdiques.',
      actionText: 'Més informació',
      link: '/contacto'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '600px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  navigate(url: string): void {
    window.location.href = url;
  }

}

