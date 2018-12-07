import { Injectable } from '@angular/core';

@Injectable()

export class RopaService{
    public prenda = "Pantalones de dJeans";
    public coleccion_ropa = ['Remera Roja Nike', 'Short verde'];

    getPrenda(){
        return this.prenda;
    }

    addPrenda(nombre_prenda:string){
        this.coleccion_ropa.push(nombre_prenda);
    }

    getColeccion(){
        return this.coleccion_ropa;
    }

    removePrenda(index_ropa:number){
        this.coleccion_ropa.splice(index_ropa,1);
    }
}