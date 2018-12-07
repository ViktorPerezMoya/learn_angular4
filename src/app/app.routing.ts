import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importo mis componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutasComponent } from   './frutas/frutas.component';
import { HomeComponent } from './home/home.cmponent';
import { ContactoComponent} from './contacto/contacto.component';

//declaro el vector de mis rutas
const appRoutes: Routes = [
    {path : '', component: EmpleadoComponent}, //ruta home
    {path : 'empleado', component: EmpleadoComponent},
    {path : 'frutas', component: FrutasComponent},
    {path: 'pagina-principal', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:myparam', component: ContactoComponent},
    {path : '**', component: EmpleadoComponent} //ruta por defecto si es un 404 NOT FOUND
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);