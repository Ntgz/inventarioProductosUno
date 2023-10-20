import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {

  public nombre_componente:string = 'Componente de fruta';
  public listado_frutas:string = 'Naranja, Manzana, Pera y Sandia';

  public nombre:string;
  public edad:number;
  public trabajos:Array<any> =['caspintero', 44, 'Fontanero']

  constructor(){
    this.nombre = 'nicolas';
    this.edad = 25;

    
  }

  ngOnInit(){
    this.cambiarNombre();
    this.cambiarEdad( 25);
    alert('Hola mundo!!' + this.nombre + this.edad);

    //Variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno === 8){
      let uno = 3;
      var dos = 99;
      console.log('dentro del if'+ uno + dos);
      
    }
    console.log('fuera del if'+ uno);
  }

  cambiarNombre(){
    this.nombre = 'Nicolas Tellez'
  }

  cambiarEdad(edad:any){
    this.edad = edad
  }

}
