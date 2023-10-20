import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent {

  public titulo = "Página principal";
  public listado_ropa:Array<string> = [];
  public prenda_a_guardar:string;

  public fecha;

  constructor(
    private _ropaService: RopaService
    
  ){
    this.prenda_a_guardar = ''
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba('Camiseta'));
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar)
    this.prenda_a_guardar=''
  }
  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index)
    
  }

}
