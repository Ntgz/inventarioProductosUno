import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css'],
  providers: [PeticionesService]
})
export class CochesComponent {

  public coche: Coche;
  public coches:Array<Coche> = [];
  public articulos:any;

  constructor(
    private _peticionesService: PeticionesService
  ){
    this.coche = new Coche("","","");
    this.coches = [
      new Coche("panda","120","azul"),
      new Coche("oso","125","rojo")
    ]
  }

  ngOnInit(){
    this._peticionesService.getArticulos().subscribe(
      result =>{
        this.articulos = result;
        if(!this.articulos){
          console.log("Error en el servidor");
          
        }
        console.log(result);
        
      },error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
        
      }
    );
    
  }

  onSubmit(){
    this.coches.push(this.coche)
    this.coche = new Coche("","","");
  }

}
