import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
declare var swal: any;
declare var $: any;



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {

  nombre: string = "";
  correo: string = "";
  cuerpo: string = "";
  telefono: string = "";



  constructor(public mailService: MailService,) { }

  ngOnInit(): void {
  }

  sendEmail(f: NgForm) {

    if (f.invalid) {
      return;
    }
    let mensaje = '<h3>Mensaje enviado desde el sitio web www.kunumi.com.py</h3> <br>';
    mensaje += ' <b> Nombre y Apeliido: </b>' + this.nombre + '<br> ';
    if (this.correo) {
      mensaje += ' <b>Correo: </b>' + this.correo + '<br>';
    }
    if (this.telefono) {
      mensaje += ' <b>Numero de Telefono: </b>' + this.telefono + '<br> ';
    }



    mensaje += ' <b>Mensaje:</b> <br><br> ' + this.cuerpo;

    this.mailService.enviar(mensaje).subscribe();
    swal('Mensaje Enviado!', 'En breve nos comunicaremos con UD.', 'success');

    f.reset();

  }

}
