import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';


// install Swiper modules
SwiperCore.use([Navigation, Pagination]);;

@Component({
  selector: 'app-simulomse',
  templateUrl: './simulomse.component.html',
  styleUrls: ['./simulomse.component.css']

})
export class SimulomseComponent {

  slidesPerView = 4;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.setSlidesPerView();
  }

  setSlidesPerView() {
    if (window.innerWidth <= 660) {
      this.slidesPerView = 1;
    } else if (window.innerWidth <= 991) {
      this.slidesPerView = 2;
    } else if (window.innerWidth <= 1300) {
      this.slidesPerView = 3;
    } else {
      this.slidesPerView = 4;
    }
  }

  ngOnInit() {

    this.setSlidesPerView();

  }



@ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper!.swiperRef.slideNext(300);
  }
  slidePrev(){
    this.swiper!.swiperRef.slidePrev(300);
  }





}
/*
  Swiper Js Angular https://v8.swiperjs.com/angular
  cmd : npm i swiper@8.4.7


  https://www.youtube.com/watch?v=P8dZHy5DQDw&t=39s
*/
