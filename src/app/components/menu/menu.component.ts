import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  private router = inject(Router)

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
    var header = document.querySelector(".box-one");

    window.addEventListener("scroll", function () {
      header!.classList.toggle("arriba", window.scrollY < 900);
      header!.classList.toggle("abajo", window.scrollY > 600);

      /*
      if (window.scrollY < 900 && !header!.classList.contains("abajo")) {
        header!.classList.add("abajo");
        // Tu función aquí
      } else if (window.scrollY >= 900 && header!.classList.contains("abajo")) {
        header!.classList.remove("abajo");
        // Tu función aquí
      }
*/
    });


  }



  ngOnInit() {
    /*var nav = document.querySelector("#sombra") as HTMLElement;
    if(window.innerWidth < 900){
      nav.classList.add('abajo')
      nav.style.backgroundColor = "red";
      console.log("gfgeghhst")
    }

*/


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {

        if (window.location.pathname === '/') {/*:o*/
          this.funScroll();

        } if (event.url.includes('plataforma') || event.url.includes('sobreNosotros') || event.url.includes('contacto') || event.url.includes('simulomse')) {
          var header = document.querySelector(".box-one");
          header!.classList.add('abajo')
          //this.disappearMenu()    :(
        }
      }
    });

  }










}
