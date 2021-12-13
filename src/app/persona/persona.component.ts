import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent { // implements OnInit

  // constructor() { }

  // ngOnInit(): void { // para inicializar el componente
  // }

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  // edad: number = 28;
  private edad: number = 28; // como es privada no se puede acceder solamente con "edad" como los demás, hay que crear un método para poder acceder al valor

  getEdad():number { // método para obtener la edad ya que es privada
    return this.edad;
  }

}
