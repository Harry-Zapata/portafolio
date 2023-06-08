import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-content',
  templateUrl: './resumen-content.component.html',
  styleUrls: ['./resumen-content.component.scss']
})
export class ResumenContentComponent {

  data = {
    nombre: "Harry Franshesco Zapata Soto",
    direccion: "Jequetepeque, La Libertad, Peru",
    telefono: "+51 904 961 437",
    nacimiento: "Diciembre 21, 2001",
    email: "harryzapatasoto@gmail.com",
    interes: "Frelance, Full-Time",
    profesion: "Desarrollador Web Frontend",
    resumen: "Web developer Junior con 1 año de experiencia. especializado en desarrollo front end. Experimentado con todas las etapas de la ciclo de desarrollo para proyectos web dinámicos. Tengo un conocimiento profundo que incluye HTML5 avanzado, CSS, CSS3, JSON, JavaScript, TypeScript, JQuery, MongoDB, Express, Angular, NodeJS, React, Php, SQL y MySql. Fuertes antecedentes en gestión y liderazgo.",
    tecnologias: [
      { nombre: "HTML5", progreso: 95 },
      { nombre: "CSS", progreso: 90 },
      { nombre: "CSS3", progreso: 90 },
      { nombre: "MySQL", progreso: 70 },
      {nombre: "Git/Github", progreso: 80},
      { nombre: "SQL", progreso: 50 },
      { nombre: "React", progreso: 20 },
      { nombre: "NodeJS", progreso: 65 },
      { nombre: "Angular", progreso: 85 },
      { nombre: "PHP", progreso: 50 },
      { nombre: "JQuery", progreso: 50 },
      { nombre: "JavaScript", progreso: 80 },
      { nombre: "TypeScript", progreso: 80 },
      { nombre: "JSON", progreso: 80 },
      { nombre: "MongoDB", progreso: 70 },
      { nombre: "Express", progreso: 50 },
    ],
    experiencia: [
      {
        puesto: "Web Developer Freelancer",
        empresa: "Workana",
        inicio: "Diciembre 2021 ",
        fin: "Presente",
        resumen: "Desarrollo de Landing Pages simples desarrolladas con HTML5, CSS3 y JavaScript, asi como la creacion de la Interface de usuario y el despliege a produccion de las landing Pages. Optimizacion de paginas web ya creadas asi como el cambio de componentes JavaScript y la mejora de proyectos ya hechos con las tecnologuias antes mencionadas. Traspaso de paguinas web hechas con CMS como WordPress a Webs hechas con las tecnologias HTML5, CSS3 y JavaScript o el Stack MEAN."
      }
    ],
    educacion: [
      {
        grado: "Desarrollo Web FrontEnd",
        escuela: "MTPE - CERTUS",
        inicio: "Oct 2022",
        fin: "Feb 2023",
        certificado: "https://portafoliohz.000webhostapp.com/MTPE_159DF_71890124_J04.pdf",
        resumen: "En este Bootcam reforce los conocimientos que tenia sobre HTML5, CSS3 y JavaScript ademas de eso aprendi nuevas tecnologias realizando proyectos practicos con el stack MEAN."
      }
    ],
    servicios: [
      {
        icon: "ion-laptop",
        service: "Diseño Web",
        resumen: "Soy un maquetador web creativo y confiable. Transformo ideas en diseños atractivos y funcionales para una experiencia de usuario excepcional."
      },
      {
        icon: "ion-pie-graph",
        service: "Desarrollo de Aplicaciones",
        resumen: "Desarrollador de aplicaciones web: Creo soluciones interactivas y escalables para brindar experiencias atractivas y eficientes."
      },
      {
        icon: "ion-paintbucket",
        service: "Mantenimiento y actualización de sitios web",
        resumen: "Actualizo y mejoro tu sitio web para mantenerlo relevante y funcional. ¡Mantén una presencia en línea actualizada!"
      },
      {
        icon: "ion-printer",
        service: "Integración de sistemas y APIs de terceros",
        resumen: "Integro sistemas y APIs para una funcionalidad ampliada. Conecta tu sitio web con servicios externos de manera eficiente."
      },
      {
        icon: "ion-qr-scanner",
        service: "Implementación de estrategias de SEO",
        resumen: "Optimizo tu sitio web para que sea encontrado en los motores de búsqueda. Aumenta tu visibilidad y atrae más tráfico."
      },
      {
        icon: "ion-android-archive",
        service: "Optimización de la velocidad y rendimiento del sitio web",
        resumen: "Acelero tu sitio web para una experiencia de carga rápida. Optimiza el rendimiento y cautiva a tus visitantes."
      }
    ],
    testimonio: [
      {
        img: "../assets/images/testimonials/1.jpeg",
        testimonio: "Trabajo con Anderson en varios proyectos de desarrollo web y creo que es extremadamente desarrollador FrontEnd creativo y técnico. La experiencia de Anderson implica la construcción compleja de diseño receptivo con HTML 5, CSS3 y JavaScript.",
        nombre: "Jose Bonifacio",
        puesto: "Analista Desarrollador TI"
      },
      {
        img: "../assets/images/testimonials/2.jpeg", 
        testimonio: "Trabajo con Anderson en varios proyectos de desarrollo web y creo que es un desarrolador FrontEnd y BackEnd extremadamente creativo.", 
        nombre: "Cristian López", 
        puesto: "Infraestructura de TI"
      }
      
    ]

  }

}
