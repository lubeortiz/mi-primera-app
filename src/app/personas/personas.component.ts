import { Component } from '@angular/core';

@Component({
  //declarar atributos
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  //definir la clase
  deshabilitar = false;
  mensaje = '';
  titulo = '';
  mostrar = false;

  agregarPersona() { //event binding
    this.mostrar = true;
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) { //event binding
      this.titulo = (<HTMLInputElement>event.target).value; //convierte el valor para poder tomarlo e imprimirlo
  }
}
