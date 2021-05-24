import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: [
  ]
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /* magnificPopup video view */
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  }

}
