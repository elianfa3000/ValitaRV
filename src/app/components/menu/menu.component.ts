import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private router = inject(Router)

  funScroll() {
    var header = document.querySelector(".box-one");
    window.addEventListener("scroll", function () {
      header!.classList.toggle("arriba", window.scrollY < 900);
      header!.classList.toggle("abajo", window.scrollY > 600);
    });
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        var header = document.querySelector(".box-one");
        if (event.url.includes('inicio')) {
          this.funScroll();
          console.log("inicio")
        } if (event.url.includes('plataforma')) {
          header!.classList.add('abajo')
          console.log("plataforma")
        } if (event.url.includes('sobreNosotros')) {
          header!.classList.add('abajo')
          console.log("sobreNosotros")
        } if (event.url.includes('contacto')) {
          header!.classList.add('abajo')
          console.log("contacto")
        }
      }
    });
  }


}
