import { ModuleWithProviders } from "@angular/core";
import {Routes, RouterModule } from '@angular/router';

import { EmpleadosComponent } from "./empleados/empleados.component";
import { FrutaComponent } from "./fruta/fruta.component";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { CochesComponent } from "./coches/coches.component";
import { PlantillasComponent } from "./plantillas/plantillas.component";

const appRoutes: Routes = [
    // El que inicia
    {path: '', component: HomeComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'fruta', component:FrutaComponent},
    {path: 'home', component:HomeComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'coches', component:CochesComponent},
    {path: 'plantillas', component:PlantillasComponent},
    {path: 'contacto/:page', component:ContactoComponent},
    // El que falla
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

