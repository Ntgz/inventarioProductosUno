import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  
  public nombre_componente = 'empleados';
  public listado_empleados = 'Juan,Nico,samuel';
  public empleado:Empleado;
  public empleados:Array<Empleado>;
  public trabajador_externo:boolean;
  public color:string;
  public color_seleccionado:string;

  constructor(){
		this.empleado = new Empleado('Mariana Diaz', 16, 'Designer', false);
		this.empleados = [
			new Empleado('Mariana Diaz', 16, 'Designer', false),
			new Empleado('Juanita Pintor', 27, 'Engineer', true),
			new Empleado('Maria Julieta Matamoros', 33, 'CEO', true),
		]
    this.trabajador_externo = true;
    this.color = 'green';
    this.color_seleccionado = '#ccc';
	}

  ngOnInit(){

    console.log(this.empleados);

  }

  cambiarExterno(valor:boolean){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log(this.color_seleccionado);
    
  }

}
