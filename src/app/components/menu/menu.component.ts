import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  private router = inject(Router);
  private scrollListener: any;

  /*
  disappearMenu() {

    var menu = document.querySelector(".box-one") as HTMLElement;
    setTimeout(function () {
      window.addEventListener("scroll", function () {

        if (menu!.classList.contains("visible")) {
          // Hide the menu.
          setTimeout(function () {
            menu.classList.remove("visible");
            menu.classList.add("hidden");
          }, 4000)//desparece

        } else {
          setTimeout(function () {
            // Show the menu.
            menu.classList.remove("hidden");
            menu.classList.add("visible");
            setTimeout(function () {
              // Show the menu.
              menu.classList.remove("visible");
              menu.classList.add("hidden");
              console.log("5000")
            }, 9000)
            console.log("1")
          }, 1)

        }



      })
    }, 20);
  }
*/
  funScroll() {
    var header = document.querySelector('.box-one');

    this.scrollListener = () => {
      header!.classList.toggle('arriba', window.scrollY < 900);
      header!.classList.toggle('abajo', window.scrollY > 600);
    };

    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // SIEMPRE limpia cualquier scroll anterior
        if (this.scrollListener) {
          window.removeEventListener('scroll', this.scrollListener);
        }

        if (event.urlAfterRedirects === '/') {
          // SOLO en la página de inicio activa funScroll()
          // 👇 SIEMPRE aseguramos que inicie invisible
          const header = document.querySelector('.box-one');
          header!.classList.add('arriba');
          header!.classList.remove('abajo');

          // Activamos el efecto scroll SOLO en inicio
          this.funScroll();
        } else {
          // EN TODAS LAS DEMÁS, aseguras que esté oscuro fijo
          const header = document.querySelector('.box-one');
          header!.classList.add('abajo');
          header!.classList.remove('arriba');
        }
      }
    });
  }
}
