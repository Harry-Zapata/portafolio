import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-portafolio-content',
  templateUrl: './portafolio-content.component.html',
  styleUrls: ['./portafolio-content.component.scss']
})
export class PortafolioContentComponent implements OnInit {
  ngOnInit(): void {
    this.menuFiltro();
    console.log("ejecutando la ngoninit");
  }

  @Output()
  propagar = new EventEmitter<any>();
  @Output() actualizar= new EventEmitter<any>();
  emit(data: any) {
    this.propagar.emit(data);
    console.log("ejecutando la funcion emit");
    
  }
  data = {
    proyectos: [
      {
        filtro: "artwork",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "CALCULADORA",
          link: "",
          categoria: "web",
          cliente: "freelancer",
          rol: "web developer",
          fecha: "feb 2023",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-calculadora.png",
            "../assets/images/portfolio/proyectos/M-calculadora.png"
          ]
        }
      },
      {
        filtro: "design",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "component",
          link: "",
          categoria: "web",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-component.png",
            "../assets/images/portfolio/proyectos/M-component.png"
          ]
        }
      },
      {
        filtro: "web",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "cripto",
          link: "",
          categoria: "web",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-cripto.png",
            "../assets/images/portfolio/proyectos/M-cripto.png",
          ]
        }
      },
      {
        filtro: "artwork",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "hunddle",
          categoria: "web",
          link: "",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-huddle.png",
            "../assets/images/portfolio/proyectos/M-huddle.png"
          ]
        }
      },
      {
        filtro: "web",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "order",
          categoria: "web",
          link: "",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-order.png",
            "../assets/images/portfolio/proyectos/M-order.png",
          ]
        }
      },
      {
        filtro: "design",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "product",
          categoria: "web",
          cliente: "freelancer",
          rol: "web developer",
          link: "",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-product.png",
            "../assets/images/portfolio/proyectos/M-product.png"
          ]
        }
      },
      {
        filtro: "artwork",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "qr component",
          categoria: "web",
          link: "",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-qr.png",
            "../assets/images/portfolio/proyectos/M-qr.png"
          ]
        }
      },
      {
        filtro: "web",
        href: "project-1.html",
        alt: "alt",
        data: {
          nombre: "summary",
          categoria: "web",
          link: "",
          cliente: "freelancer",
          rol: "web developer",
          description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae autem quisquam maiores eligendi magni facere et, quam neque minus numquam cumque, fugiat sed accusantium cupiditate obcaecati itaque vel, dolores aperiam rerum? Voluptatem sed doloremque tempore eum amet laboriosam minus officiis debitis qui impedit aperiam vitae, ab unde incidunt alias aspernatur sint veritatis deleniti maxime similique sunt maiores optio! Quia ab voluptatum laboriosam animi? Ratione tempora voluptatem nam quos aliquam repellendus repellat quia. Sit, quis? Tenetur laborum quisquam minima ipsa tempora recusandae molestias reiciendis illum dolores vel cum voluptatibus, dignissimos explicabo, iusto, nulla ipsum! Et iusto quidem magni quam quae minus.",
          imagenes: [
            "../assets/images/portfolio/proyectos/E-summary.png",
            "../assets/images/portfolio/proyectos/M-summary.jpg",
          ]
        }
      }
    ]
  }

  menuid="1";
  filtro(element:any){
    console.log("ejecutando la funcion filtro");
    let id = element.id;
    id =="all" ? this.menuid="1" : this.menuid=id;
    this.actualizar.emit(this.menuid);
  }

  menu: Array<string> = []
  menuFiltro() {
    console.log("ejecutando la funcion menufiltro");
    this.data.proyectos.forEach(element => {
      this.menu.push(element.filtro)
    });
    let uniqueValues = [...new Set(this.menu)];
    this.menu = uniqueValues;
  }

  
}