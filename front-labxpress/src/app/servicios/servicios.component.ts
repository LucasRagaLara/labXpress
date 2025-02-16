import { Component, OnInit, ChangeDetectorRef,  AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-servicios',
  imports: [MenuComponent, GalleriaModule, AccordionModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.sass'],
})

export class ServiciosComponent implements OnInit {
  position: 'bottom' | 'top' | 'left' | 'right' | undefined;
  showIndicatorsOnItem: boolean = true;
  images: any[] = [];
  informacionSeleccionada: { titulo: string, pruebas: Array<{ titulo: string, descripcion: string }> } | null = null;

  activeIndexes: number[] = [];

  faqs = [
    { titulo: '💡 Com funciona?', descripcion: 'El servei LabXpress permet realitzar proves mèdiques a domicili amb l\'objectiu de facilitar l\'accés a serveis de salut a les persones. Un cop sol·licitada la prova, un tècnic es desplaça fins al teu domicili per realitzar-la, i els resultats seran lliurats en un termini determinat a través de la nostra plataforma.', value: '0' },
    { titulo: '💰 Preu del servei', descripcion: 'El cost mensual del servei és de 29,99€, el qual inclou totes les proves mèdiques bàsiques que es poden realitzar a domicili, així com l\'assessorament a través de la nostra plataforma en línia. Hi ha opcions de serveis addicionals disponibles a preus individuals.', value: '1' },
    { titulo: '📅 Dates de recordatoris', descripcion: 'Amb LabXpress, els usuaris rebran notificacions personalitzades per recordar-los les dates de les seves proves mèdiques, així com les consultes per a seguiments periòdics. Aquests recordatoris s\'ajustaran a les necessitats de salut de cada usuari, basats en el seu historial mèdic.', value: '2' },
    { titulo: '🔬 Què és LabXpress?', descripcion: 'LabXpress és una empresa que ofereix proves mèdiques a domicili, amb l\'objectiu de proporcionar un servei ràpid, còmode i accessible per a tots. Mitjançant el nostre sistema, els pacients poden realitzar-se diverses proves sense necessitat de desplaçar-se a un centre mèdic, obtenint resultats ràpidament a través de la nostra plataforma en línia.', value: '3' },
    { titulo: '📑 Com puc sol·licitar una prova?', descripcion: 'Per sol·licitar una prova mèdica amb LabXpress, només cal que accedeixis a la nostra aplicació mòbil o al lloc web. En el procés de sol·licitud, podràs seleccionar el tipus de prova que necessites i agendar una cita amb un tècnic que es desplaçarà al teu domicili per realitzar-la. Un cop finalitzada la prova, rebràs els resultats de manera electrònica.', value: '4' },
    { titulo: '🕒 Quan rebré els resultats?', descripcion: 'Els resultats de les proves realitzades a través de LabXpress es lliuraran en un termini de 24 a 48 hores, depenent de la complexitat de la prova. Un cop els resultats estiguin disponibles, seran enviats de manera segura a la teva aplicació mòbil o correu electrònic per a una fàcil consulta.', value: '5' }
  ];
  
  
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

  preguntasFAQ = [
    { pregunta: '¿Cuánto cuesta la suscripción?', respuesta: 'La suscripción tiene un coste de 15,99€ al mes.' },
    { pregunta: '¿Cuándo se realiza la consulta médica?', respuesta: 'La consulta médica telefónica se realiza cada 3 meses.' },
    { pregunta: '¿Qué incluye el informe de salud anual?', respuesta: 'El informe incluye un análisis completo de tu estado de salud y recomendaciones para el futuro.' },
    { pregunta: '¿Puedo cancelar mi suscripción?', respuesta: 'Sí, puedes cancelar tu suscripción en cualquier momento.' }
  ];
  
  constructor(private cdr: ChangeDetectorRef) {
  }

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
    this.informacionSeleccionada = {
      titulo: punto.titulo,
      pruebas: punto.pruebas
    };
    this.cdr.detectChanges();
  }

  toggleAccordion(index: number) {
    this.activeIndexes = this.activeIndexes.includes(index) ? this.activeIndexes.filter(i => i !== index) : [...this.activeIndexes, index];
  }

}
