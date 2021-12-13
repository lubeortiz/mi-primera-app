import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //inidcamos el HTML que se va a utilizarpara desplegar el componente
  styleUrls: ['./app.component.css'] // inidicamos qué archivo css se va a utilizar
})
export class AppComponent {
  titulo = 'Hola Mundo desde Angular';
}
