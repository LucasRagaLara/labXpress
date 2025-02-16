import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-servicios',
  imports: [MenuComponent, GalleriaModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass'],
})

export class ServiciosComponent implements OnInit {
  position: 'bottom' | 'top' | 'left' | 'right' | undefined;
  showIndicatorsOnItem: boolean = true;
  images: any[] = [];
  
  // Variable para mostrar la información de la prueba seleccionada
  informacionSeleccionada: { titulo: string, pruebas: Array<{ titulo: string, descripcion: string }> } | null = null;

  puntos = [
    { 
      clase: "p1",
      titulo: 'Proves Generals',
      pruebas: [
        { titulo: 'Test COVID-19', descripcion: 'Prova per detectar el virus del COVID-19 mitjançant mostres nasals o de saliva.' },
        { titulo: 'Test funció hepàtica', descripcion: 'Examen per mesurar el rendiment del fetge i detectar possibles problemes.' },
        { titulo: 'Test funció renal', descripcion: 'Prova que avalua la funció dels ronyons per detectar malalties renals.' }
      ]
    },
    {
      clase: "p2",
      titulo: 'Proves Metabòliques',
      pruebas: [
        { titulo: 'Prova fertilitat', descripcion: 'Examen que avalua la capacitat de concebre tant en homes com en dones.' },
        { titulo: 'Prova de glucosa en sang', descripcion: 'Mesura dels nivells de glucosa en la sang per detectar diabetis o problemes metabòlics.' },
        { titulo: 'Prova de colesterol total', descripcion: 'Examen per mesurar el nivell de colesterol en sang i avaluar el risc de malalties cardiovasculars.' }
      ]
    },
    { 
      clase: "p3",
      titulo: 'Proves Hormonals',
      pruebas: [
        { titulo: 'Prova d’oxigen en sang', descripcion: 'Avaluació de la quantitat d’oxigen en la sang per detectar problemes respiratoris.' },
        { titulo: 'Test de embaràs', descripcion: 'Prova per confirmar l’embaràs mitjançant la detecció de l’hormona HCG en l’orina o sang.' },
        { titulo: 'Prova VIH', descripcion: 'Examen per detectar el virus de la immunodeficiència humana (VIH) en la sang.' }
      ]
    },
    { 
      clase: "p4",
      titulo: 'Proves d’Infeccions i Al·lèrgies',
      pruebas: [
        { titulo: 'Test d’infeccions urinàries', descripcion: 'Prova per detectar infeccions en el tracte urinari mitjançant mostres d’orina.' },
        { titulo: 'Proves d’al·lèrgia', descripcion: 'Exàmens per identificar possibles al·lèrgies a aliments, pol·len, àcars i altres al·lergògens comuns.' }
      ]
    },
    { 
      clase: "p5",
      titulo: 'Proves Cardíaques',
      pruebas: [
        { titulo: 'Monitoreig ritme cardíac', descripcion: 'Seguiment continu del ritme cardíac per detectar irregularitats o malalties cardíaques.' },
        { titulo: 'Mesura pressió arterial', descripcion: 'Examen per mesurar la pressió arterial i detectar problemes d’hipertensió o hipotensió.' }
      ]
    }
  ];
  

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.images = [
      { itemImageSrc: 'assets/images/gallery/laboratorio_medico.png', alt: 'Laboratorio médico', title: 'Laboratorio Médico' },
      { itemImageSrc: 'assets/images/gallery/utensilios.png', alt: 'Utensilios médicos', title: 'Utensilios Médicos' },
      { itemImageSrc: 'assets/images/gallery/pcr.png', alt: 'Prueba PCR', title: 'Prueba PCR' },
      { itemImageSrc: 'assets/images/gallery/arterial_presion.png', alt: 'Medición de presión arterial', title: 'Presión Arterial' },
      { itemImageSrc: 'assets/images/gallery/oxigeno.png', alt: 'Prueba de oxígeno en sangre', title: 'Oxígeno en Sangre' },
      { itemImageSrc: 'assets/images/gallery/alergia.png', alt: 'Resultados de prueba de alergia', title: 'Prueba de Alergia' },
    ];    
  }

  mostrarInformacion(punto: any) {
    // Asignamos la información de la prueba seleccionada al objeto
    this.informacionSeleccionada = {
      titulo: punto.titulo,
      pruebas: punto.pruebas
    };
    this.cdr.detectChanges();
  }
}
