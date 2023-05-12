import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  menu() {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".box-one");

      header!.classList.toggle("abajo", window.scrollY > 800);
      header!.classList.toggle("arriba", window.scrollY < 1000);
    })
  }

  ngOnInit() {
    console.log("hola")

    this.menu();

  }



}
