import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styles: [
  ]
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }

}
