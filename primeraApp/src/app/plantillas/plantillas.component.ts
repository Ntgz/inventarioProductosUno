import { Component } from '@angular/core';

@Component({
  selector: 'plantillas',
  templateUrl: './plantillas.component.html',
  styleUrls: ['./plantillas.component.css']
})
export class PlantillasComponent {
  public titulo;
  public administrador;

  constructor(){
    this.titulo= "Plantillas ngTemplate en Angular";
    this.administrador = true;
  }

  cambiar(value:any){
    this.administrador = value
  }

}
