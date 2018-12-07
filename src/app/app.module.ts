import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProvider} from './app.routing';//para el menu
import { BasePipe } from './pipes/base.pipe';


import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent } from './home/home.cmponent';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    HomeComponent,
    ContactoComponent,
    BasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
