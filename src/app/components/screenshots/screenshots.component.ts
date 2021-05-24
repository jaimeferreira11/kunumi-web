import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styles: [
  ]
})
export class ScreenshotsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // insurance - pro
    $('.app-active').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    /* magnificPopup img view */
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });


  }

}
