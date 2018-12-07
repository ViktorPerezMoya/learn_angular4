import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
    selector: 'profile-empleado',
    templateUrl: './empleado.component.html',
    styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent{
    public titulo = "Perfil del empleado";
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public mostrarLista: boolean;
    public color:string;
    public colorCode:string;

    constructor(){
        this.empleado =  new Empleado('Victor Perez',28, "Programador", false);
        this.trabajadores = [
            new Empleado('Janet Perez',28, "Programador", true),
            new Empleado('Oscar Rodrigez',38, "Cocinero", false),
            new Empleado('Romina Martinez',28, "Administrativo", true),
            new Empleado('Gabriela Araujo',18, "Grumi", true),
            new Empleado('David Nuñes',25, "CEO", true),
        ];

        this.mostrarLista = false;
        this.color = 'yellow';
        this.colorCode = '#ccc';
    }

    ngOnInit(){//se ejecuta despues del constructor
        console.log(this.empleado);
        console.log(this.trabajadores);
    }

    cambiarMostrarLista(bandera){
        this.mostrarLista = bandera;
    }

    logColorCode(){
        console.log(this.colorCode);
    }
}