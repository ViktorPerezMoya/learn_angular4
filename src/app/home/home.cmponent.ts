import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [RopaService]
})

export class HomeComponent{
    public titulo:string = "Pagina principal";
    public ropa_nombre:string;
    public lista_ropa: Array<string>;

    public fecha;
    public texto_prueba;

    public numero_decimal:number;

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date();
        this.texto_prueba = "VICTOR perez Moya";
        this.numero_decimal = 16;
    }

    ngOnInit(){
        this.lista_ropa = this._ropaService.getColeccion();
    }

    agregarRopa(){
        this._ropaService.addPrenda(this.ropa_nombre);
        this.ropa_nombre = null;
    }

    eliminarRopa(index){
        this._ropaService.removePrenda(index);
    }
}