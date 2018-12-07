import { Component } from '@angular/core';

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})

export class EmpleadosComponent{
    public titulo:string;
    public nombre:string;
    public edad:number;
    public mayor:boolean;
    public trabajos:Array<any>;
    comodin:any;

    constructor(){
        this.titulo = "Detalle de empleado";
        this.nombre = "Victor Perez";
        this.edad = 28;
        this.trabajos = ['Carpintero', 44, 'Plomero'];
        this.comodin = "SI";
    }

    ngOnInit(){
        this.imprimirSaludo(this.nombre);
        this.imprimirAnioNacimiento(this.edad);
        this.imprimirVector();
        this.usarVarLet();
    }

    imprimirSaludo(nombre){
        console.log("Hola "+nombre+"!!!");
    }

    imprimirAnioNacimiento(edad){
        let anio:number = (new Date().getFullYear());
        console.log("Año de nacimiento: "+(anio-edad));
    }

    imprimirVector(){
        console.log(this.trabajos);
    }

    usarVarLet(){
        var v1 = 5;
        var v2 = 6;
        if(v1 === 5){
            let v1 = 7;
            var v2 = 8;
            console.log("Los valores de las variables DENTRO DEL IF son: v1:"+v1+" y v2:"+v2);
        }
        console.log("Los valores de las variables FUERA DEL IF son: v1:"+v1+" y v2:"+v2);
    }
}