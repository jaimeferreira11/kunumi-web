import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
      var scroll = wind.scrollTop();
      if (scroll < 1) {
        sticky.removeClass('sticky');
      } else {
        sticky.addClass('sticky');
      }
    });

  }

}
