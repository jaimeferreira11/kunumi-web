import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    public http: HttpClient
  ) { }


  enviar(mensaje: string, asunto: string = 'Contacto Pagina Web - Kunumi') {

    // tslint:disable-next-line: max-line-length
    const url = `http://www.fundacionparaguaya.org.py/fupapp-rest-trans/public/mail/send-externo`;

    const body = new HttpParams()
      .set('remitente', 'ideaswebpy@gmail.com')
      .set('clave', 'ideasweb2017')
      // .set('destinatario', 'hola@ogami.org.py')
      .set('destinatario', 'hola@ogami.org.py')
      .set('cc', '')
      .set('asunto', asunto)
      .set('cuerpo', mensaje);

    return this.http.post(url, body, { responseType: 'text' });

  }
}
