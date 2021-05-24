import { Component, OnInit } from '@angular/core';

import { faMedal, faBaby, faBalanceScale, faMapMarkedAlt, faComments, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/angular-fontawesome'


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styles: [
  ]
})
export class FeaturesComponent implements OnInit {

  faMedal = faMedal;
  faBaby = faBaby;
  faBalanceScale = faBalanceScale;
  faMapMarkedAlt = faMapMarkedAlt;
  faComments = faComments;
  faAddressBook = faAddressBook;
  embarazo = 'assets/img/Trimestral.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
